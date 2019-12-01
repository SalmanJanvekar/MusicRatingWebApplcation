export interface login {
    Email: {type: String, required: true, max: 30, unique: true},
    Password: {type: String, required: true},
    Active: {type: Boolean},
    Deactive: {type: Boolean},
    authenticationCode: {type: String, max: 5, min: 5},
}