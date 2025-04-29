import { LitElement, html, css } from 'lit';

const themeConverter = {
    fromAttribute(value) {
        return value == 'dark';
    },
    toAttribute(value) {
        return value ? 'dark' : 'light';
    }
};

const passwordRules = {
    fromAttribute(value) {
        return value ? JSON.parse(value) : {
            minLength: 8,
            requireNumbers: true,
            requireSpecialChars: true
        };
    },
    toAttribute(value) {
        return JSON.stringify(value);
    }
};

export class UserLogin extends LitElement {
    static styles = css`
        :host {
            display: block;
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            font-family: Arial, Helvetica, sans-serif;
        }

        :host([theme="dark"]) {
            background-color: #000000;
            color: #ffffff;
        }

        .error {
            color: #f70505;
            margin-top: 5px;
        }

        .success { 
            color: #03d126;
            margin-top: 5px;
        }

        input, button {
            width: 100%;
            padding: 10px;
            margin: 5px 0;
            box-sizing: border-box;
        }

        button {
            background-color: #4caf50;
            color: #ffffff;
            border: none;
            cursor: pointer;
        }

        button:disabled {
            background-color: #cccccc;
        }
    `;

    static get properties() {
        return {
            darkMode: { 
                type: Boolean,
                converter: themeConverter,
                reflect: true
            },
            passwordRequirements: {
                type: Object,
                converter: passwordRules,
                attribute: 'password-rules'
            },
            loading: {
                type: Boolean,
                reflect: true
            },
            sessionToken: {
                attribute: false
            }
        };
    }

    constructor() {
        super();
        this.darkMode = false;
        this.passwordRequirements = {
            minLength: 8,
            requireNumbers: true,
            requireSpecialChars: true
        };
        this._formData = {
            username: '',
            password: '',
            rememberMe: false
        };
        this._errors = {
            username: '',
            password: ''
        };
        this.loading = false;
        this.sessionToken = '';
    }

    validateUsername(username) {
        if(!username) return 'Username is required';
        if(username.length < 3) return 'Username too short';
        return '';
    }

    validatePassword(password) {
        if(!password) return 'Password is required';
        const {minLength, requireNumbers, requireSpecialChars} = this.passwordRequirements;

        if(password.length < minLength){
            return `Password must be at least ${minLength} characters`;
        }
        
        if(requireNumbers && !/\d/.test(password)) {
            return 'Password must contain at least one number';
        }

        if(requireSpecialChars && !/[!@#$%^&*]/.test(password)) {
            return 'Password must contain at least one special character';
        }
        return '';
    }

    handleInputChange(e) {
        const {name, value, type, checked} = e.target;
        this._formData = {
            ...this._formData,
            [name]: type === 'checkbox' ? checked : value
        };

        if(name === 'username') {
            this._errors = {
                ...this._errors,
                username: this.validateUsername(value)
            };        
        } else if(name === 'password') {
            this._errors = {
                ...this._errors,
                password: this.validatePassword(value)
            };
        }
        this.requestUpdate();
    }

    async handleSubmit(e) {
        e.preventDefault();
        this.loading = true;
        this.requestUpdate();

        const usernameError = this.validateUsername(this._formData.username);
        const passwordError = this.validatePassword(this._formData.password);

        this._errors = {
            username: usernameError,
            password: passwordError
        };
        
        if(usernameError || passwordError) {
            this.loading = false;
            this.requestUpdate();
            return;
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            this.sessionToken = `token-${Math.random().toString(36).substring(2)}`;

            this.dispatchEvent(new CustomEvent('login-success', {
                detail: {
                    username: this._formData.username,
                    token: this.sessionToken,
                    rememberMe: this._formData.rememberMe
                },
                bubbles: true,
                composed: true
            }));
        } catch(error) {
            this._errors = {
                ...this._errors,
                password: 'Login failed. Try again'
            };
        } finally {
            this.loading = false;
            this.requestUpdate();
        }
    }

    render() {
        return html`
            <form @submit=${this.handleSubmit}>
                <h2>User Login</h2>
                <section>
                    <label for="username">Username:</label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        .value=${this._formData.username}
                        @input=${this.handleInputChange}
                        ?disabled=${this.loading}
                    >
                    ${this._errors.username ? html`<div class="error">${this._errors.username}</div>` : ''}
                </section>
                
                <section>
                    <label for="password">Password:</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        .value=${this._formData.password}
                        @input=${this.handleInputChange}
                        ?disabled=${this.loading}
                    >
                    ${this._errors.password ? html`<div class="error">${this._errors.password}</div>` : ''}
                </section>
                
                <section>
                    <label>
                        <input
                            type="checkbox"
                            name="rememberMe"
                            .checked=${this._formData.rememberMe}
                            @change=${this.handleInputChange}
                            ?disabled=${this.loading}
                        >
                        Remember me
                    </label>
                </section>
                
                <button type="submit" ?disabled=${this.loading}>
                    ${this.loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
        `;
    }
}

//customElements.define('user-login', UserLogin);