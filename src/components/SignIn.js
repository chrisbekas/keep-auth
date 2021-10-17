import { useState } from 'react';
import { useSignIn } from 'react-auth-kit'
import axios from 'axios';

const SignIn = () => {

    const signIn = useSignIn();
    const [formData, setFormData] = useState({username: '', password: ''});

    const onSubmit = async (e) => {

        e.preventDefault();

        try {
            
            const res = await axios.post('http://localhost:8880/api/v1/auth', formData);
        
            if (signIn({
                token: res.data.bearer,
                expiresIn:res.data.expSeconds,
                tokenType: "Bearer",
                authState: res.data.claims}))
            {
                console.log("User authenticated");
            }
            
        } catch (error) {
            console.log(error.response.data.message);
        }

    }

    return (
        <form onSubmit={onSubmit}>
            <p>
                <input className="w-100" type={"text"} placeholder="Username" onChange={(e)=>setFormData({...formData, username: e.target.value})}/>
            </p>
            <p>
                <input className="w-100"type={"password"} placeholder="Password" onChange={(e)=>setFormData({...formData, password: e.target.value})}/>
            </p>
            <p>
                <button>Sign In</button>
            </p>
        </form>
    );

};

export default SignIn;