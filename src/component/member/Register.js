function Register() {
    return (
        <>
            <div className="container py-5">
                <div className="row py-5">
                    <form class="col-md-9 m-auto" method="post" role="form">
                        <div class="row col-md-6">
                            <div class="form-group">
                                <label className="input-type">Name</label>
                                <input type="text" class="form-control mt-1" id="name" name="name" placeholder="Name" />
                            </div>
                            <div class="form-group">
                                <label className="input-type">Email</label>
                                <input type="email" class="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;