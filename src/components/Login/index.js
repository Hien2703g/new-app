

function Login() {
    const isLogin = false;
    
    return (
        <>
            {isLogin === true ? (
                <>
                    <div>Thoong tin nguoi dung</div>
                </>
            ) : (
                <>
                    <div>Đăng nhập, Đăng ký</div>
                </>
            )}
        </>
    );
}
export default Login;
