import { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Login = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirm: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    };

    return (
        <form onSubmit={handleSubmit}>

            <Input
                type="email"
                name="email"
                id="email"
                label="E-mail"
                handleChange={handleChange}
                value={formData.email}
            />
            <Input
                type="password"
                name="password"
                id="password"
                label="Password"
                handleChange={handleChange}
                value={formData.password}
            />

            <Button
                color={"primary"}
                type={"submit"}
            >
                Sign in
            </Button>

        </form>
    )
}


export default Login;