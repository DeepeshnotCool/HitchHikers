import React from "react";
import Canvas from "./Canvas";

const Login = () => {
	return (
		<>
			<Canvas />
			<div className="main">
				<input type="checkbox" id="chk" aria-hidden="true" />
				<div className="signup">
					<form>
						<label for="chk" aria-hidden="true">Sign up</label>
						<input type="text" name="txt" placeholder="User name" required="" />
						<input type="email" name="email" placeholder="Email" required="" />
						<input
							type="number"
							name="phone"
							placeholder="Phone No."
							required=""
						/>
						<input
							type="password"
							name="pswd"
							placeholder="Password"
							required=""
						/>
						<button>Sign up</button>
					</form>
				</div>

				<div className="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="" />
					<input
						type="password"
						name="pswd"
						placeholder="Password"
						required=""
					/>
					<button>Login</button>
				</form>
				</div>
			</div>
		</>
	);
};

export default Login;
