

const JavaScriptSnippets  = () => {

    const onChange = (event) => {
        alert("Email was sent!");
        return false;
        
        };

    return (
        <>
    <h2> JavaScript Practice Snippets </h2>
    <br></br>
    <form action="https://postmail.invotes.com/send"
    method="post" id="email_form" onSubmit={onChange}>
    
    <div className="form-group">
        <h3 className= "left"> Send me an Email!</h3>
        <input type="text" className="form-control" name="subject" placeholder="Subject" />
        <textarea name="text" className="form-control" placeholder="Message"></textarea>
        <input type="hidden" name="access_token" value="1eraa7cld1npkup4xozgb574" />
        <input type="hidden" name="success_url" value="/posts/contactme" />
        <input type="hidden" name="error_url" value="/posts/contactme" />
   

   
        <button id="submit_form" type="submit" className="btn btn-primary">Send</button>
    </div>
    <p className= "left">Powered by <a href="https://postmail.invotes.com" target="_blank" rel="noreferrer">PostMail</a></p>
</form>


        </>
    );
}
 
export default JavaScriptSnippets ;