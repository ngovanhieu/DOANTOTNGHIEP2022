import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

    const [itemRegis, setItemRegis] = useState({
        fullname: "",
        email: "",
        pass: "",
        phone: ""
    })
    const [itemErr, setItemErr] = useState({})
    const ktMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const navigate = useNavigate()

    function hanldeIn(e) {
        const nameIn = e.target.name;
        const value = e.target.value;
        setItemRegis(state => ({ ...state, [nameIn]: value }))
    }
    function hanldeSubmit(e) {
        e.preventDefault();
        let checkInput = true;
        const errSubmit = {};

        if (itemRegis.fullname == "") {
            checkInput = false;
            errSubmit.fullname = "Nhap ho va ten";
        } else {
            errSubmit.fullname = ""
        }
        if (itemRegis.email == "") {
            checkInput = false;
            errSubmit.email = "Nhap dia chi email";
        } else {
            if (!ktMail.test(itemRegis.email)) {
                checkInput = false
                errSubmit.email = "Dia chi mail khong dung dinh dang"
            } else {
                errSubmit.email = ""
            }
        }
        if (itemRegis.pass == "") {
            checkInput = false;
            errSubmit.pass = "Nhap mat khau";
        } else {
            errSubmit.pass = ""
        }
        if (itemRegis.phone == "") {
            checkInput = false;
            errSubmit.phone = "Nhap so dien thoai";
        } else {
            errSubmit.phone = ""
        }
        if (!checkInput) {
            setItemErr(errSubmit)
        } else {
            alert("register is success")
            setItemErr("")
            navigate('/Login')
        }
    }

    return (
        <>
            <div class="row py-5 ">
                <form class="col-md-9 m-auto" method="post" onSubmit={hanldeSubmit}>
                    <div class="row">
                        <div class="form-group col-md-6 mb-3">
                            <label>Full name</label>
                            <input onChange={hanldeIn} type="text" class="form-control mt-1" id="name" name="fullname" placeholder="Full name" />
                        </div>
                        <div class="form-group col-md-6 mb-3">
                            <label>Email address</label>
                            <input onChange={hanldeIn} type="email" class="form-control mt-1" id="name" name="email" placeholder="Email address" />
                        </div>
                        <div class="form-group col-md-6 mb-3">
                            <label>Password</label>
                            <input onChange={hanldeIn} type="Password" class="form-control mt-1" id="email" name="pass" placeholder="Password" />
                        </div>
                        <div class="form-group col-md-6 mb-3">
                            <label>Phone numer</label>
                            <input onChange={hanldeIn} type="text" class="form-control mt-1" id="name" name="phone" placeholder="Phone number" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col mt-2">
                            <button type="submit" class="btn btn-success btn-lg px-3">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register;