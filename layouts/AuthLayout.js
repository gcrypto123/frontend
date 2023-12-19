// import node module libraries
import { useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/router';


const AuthLayout = (props) => {
	const sessionObj = useSession();
	const router = useRouter();
	useEffect(()=>{
		if(sessionObj?.status==="authenticated"){
			router.push('/dashboard')
		}
	},[sessionObj])
	if(sessionObj?.status === "loading"){
		return (<div style={{display:"flex", marginTop:60}} >
			<Image
				alt="avatar"
				src="/images/loading.gif"
	  		/>
			</div>);
	}
	
	return (
		<Container className="d-flex flex-column">
			{props.children}
		</Container>
	);
};
export default AuthLayout;
