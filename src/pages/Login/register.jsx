import { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const Register = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirm: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row mt-3">
                <div className="col-12 col-md-6">
                    <Input
                        type="text"
                        name="name"
                        id="name"
                        label="Full name"
                        handleChange={handleChange}
                        value={formData.name}
                    />
                </div>
                <div className="col-12 col-md-6">
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        label="E-mail"
                        handleChange={handleChange}
                        value={formData.email}
                    />
                </div>
            </div>
            <Input
                type="password"
                name="password"
                id="password"
                label="Password"
                handleChange={handleChange}
                value={formData.password}
            />

            <Input
                type="password"
                name="confirm"
                id="confirm"
                label="Confirm password"
                handleChange={handleChange}
                value={formData.confirm}
            />

            <Button
                type={"primary"}
            >
                Register
            </Button>

        </form>
    )
}


export default Register;