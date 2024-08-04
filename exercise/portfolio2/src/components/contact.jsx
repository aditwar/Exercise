export default function Contact() {
    return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="row mb-4">
          <div className="col text-center">
            <h2>Contact Me</h2>
          </div>
        </div>

        <div className="row justify-content-center">          
          <div className="col-lg-6">            
            <form>
              <div className="form-group mt-3">
                <label for="nama">Nama</label>
                <input type="text" className="form-control border border-2 border-primary-subtle" id="nama" />
              </div>
              <div className="form-group mt-3">
                <label for="email">Email</label>
                <input type="text" className="form-control border border-2 border-primary-subtle" id="email" />
              </div>
              <div className="form-group mt-3">
                <label for="phone">Phone Number</label>
                <input type="text" className="form-control border border-2 border-primary-subtle" id="phone" />
              </div>
              <div className="form-group mt-3">
                <label for="message">Message</label>
                <textarea className="form-control border border-2 border-primary-subtle" id="message" rows="3"></textarea>
              </div>
              <div className="form-group mt-3">
                <button type="button" className="btn btn-primary mb-5">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
}