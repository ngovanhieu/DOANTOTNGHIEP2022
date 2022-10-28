function Contact() {
    return (
        <>
            <div className="container-fluid bg-light py-5">
                <div className="col-md-6 m-auto text-center">
                    <h1 className="h1">Contact Us</h1>
                    <p>
                        Proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
            {/* <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe title="myMap" class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=673&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    </iframe>
                    <a href="https://piratebay-proxys.com/">Piratebay</a>
                </div>
                <style>.mapouter{{ position: "relative", textalign: "right", width: "100%", height: "400px" }}.gmap_canvas {{ overflow: "hidden", background: "none!important", width: "100%", height: "400px" }}.gmap_iframe {{ height: "400px!important" }}</style>
            </div> */}
            <div className="container py-5">
                <div className="row py-5">
                    <form className="col-md-9 m-auto" method="post">
                        <div className="row">
                            <div className="form-group col-md-6 mb-3">
                                <label for="inputname">Name</label>
                                <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-6 mb-3">
                                <label for="inputemail">Email</label>
                                <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Email" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label for="inputsubject">Subject</label>
                            <input type="text" className="form-control mt-1" id="subject" name="subject" placeholder="Subject" />
                        </div>
                        <div className="mb-3">
                            <label for="inputmessage">Message</label>
                            <textarea className="form-control mt-1" id="message" name="message" placeholder="Message" rows="8"></textarea>
                        </div>
                        <div className="row">
                            <div className="col text-end mt-2">
                                <button type="submit" className="btn btn-success btn-lg px-3">Let’s Talk</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;