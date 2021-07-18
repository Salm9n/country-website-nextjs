import Head from 'next/head'

const JavaScriptSnippets  = () => {

    const onChange = (event) => {
        alert("Email was sent!");
        return false;
        
        };

    return (

    <div className= "container my-container">
        <div className="row">
            <div className="col-lg-8 border-right" align="left">
                <h3> Send me an Email! </h3>
                <form action="https://postmail.invotes.com/send"
                method="post" id="email_form" onSubmit={onChange}>
    
                    <div className="form-group">
                        <input type="text" className="form-control" name="subject" placeholder="Subject" />
                        <textarea name="text" className="form-control" placeholder="Message"></textarea>
                        <input type="hidden" name="access_token" value="1eraa7cld1npkup4xozgb574" />
                        <input type="hidden" name="success_url" value="/posts/contactme" />
                        <input type="hidden" name="error_url" value="/posts/contactme" />
                        <button id="submit_form" type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
                    <p className= "left">Powered by <a href="https://postmail.invotes.com" target="_blank" rel="noreferrer">PostMail</a></p>
            </div>
            <div className="col-lg-4">
                <h3> My Links</h3>
                <a href="https://www.facebook.com/salman.mohammed.581" className="fa fa-facebook"></a>
                <a href="https://github.com/Salm9n" className="fa fa-github"></a>
                <a href="https://www.linkedin.com/in/salman-mohammed-35157814a/" className="fa fa-linkedin"></a>
                <a href="https://www.instagram.com/salm9n/" className="fa fa-instagram"></a>
            </div> 
        </div>
    </div>
        
    );
}
 
export default JavaScriptSnippets ;