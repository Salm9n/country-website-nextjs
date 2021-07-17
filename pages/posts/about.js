import logo from '../../public/nba1.png'
import Image from 'next/image'
import Link from 'next/link'
import nbaBot from '../../public/nbabot.png'
import paint from '../../public/paint.png'
import serotonin from '../../public/serotonin1.png'
import serotonin2 from '../../public/serotonin2.png'
import nba from '../../public/nba2.png'
import me from '../../public/me.jpg'

function AboutMe() {
    return ( 
        <>
        <div className= "container my-container">
            <div className="row fat-row">    {/* row1 */}
                <div className="col align-self-start">
                    <h2> About Me</h2>
                </div>
            </div>
            <div className="row med-row justify-content-center">
                <div className="col-lg-6 row2 border-right" align="center">
                    <div className= "resize">
                        <Image className="round" src={me} alt="mylogo"/>
                    </div>
                    
                </div>
                <div className="col-lg-4 offset-md-1 row2 align-self-center">
                    My name is Salman Mohammed, I'm 23 years old and a programmer. I graduated from Northern Illinois in 2019 and am 
                    building this website to get practice in using HTML, CSS, Bootsrap, React and Next JS. You can find out more about 
                    me on my <Link href="https://www.linkedin.com/in/salman-mohammed-35157814a/"><a>LinkedIn</a></Link> or <Link href="https://github.com/Salm9n"><a>GitHub</a></Link> . Scroll down to learn a bit 
                    about things I've created on my own time!
                </div>
            </div>
            <div className="row border-bottom">
                <div className="col offset-md-5">
                        <h2> Personal Projects</h2>
                </div>
            </div>
            <div className="row row2 align-items-center border-bottom">
                <div className="col-lg-8">
                    <div className="resize-bigger">
                        <Image src={nbaBot} alt="mylogo"/>
                    </div>
                </div>
                <div className ="col-lg-4">
                    <h3>NBA Facebook Bot</h3>
                    <b>Technology Used:</b> JavaScript, Heroku<br></br><br></br>
                    A simple bot I made that gives users information about any NBA team of their choice with a 
                    ![team] command. Built to test out simple AI, deploying an application to the cloud via Heroku, 
                    and practicing Javascript. 
                    <p><Link href="https://github.com/Salm9n/Facebook-Chat-Bot"><a>Github Link.</a></Link></p>
                </div>
            </div>
            <div className="row row2 align-items-center border-bottom">
                <div className="col-lg-8">
                    <div className="resize-bigger">
                        <Image src={paint} alt="mylogo"/>
                    </div>
                </div>
                <div className ="col-lg-4">
                    <h3>Paint Clone Project</h3>
                    <b>Technology Used:</b> C#<br></br><br></br>
                    A paint application i created in C#. Practiced use of creating a responsive GUI and using the draw feature. 
                    Has the ability to undo/redo moves and save images drawn. <Link href="https://github.com/Salm9n/Paint-Project-c-"><a>Github Link.</a></Link>
                </div>
            </div>
            <div className="row align-items-center margin">
                <div className="col-lg-3">
                    <div className="resize-phone">
                        <Image className="resize-phone" src={serotonin} alt="mylogo"/>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="resize-phone">
                        <Image className="resize-phone" src={serotonin2} alt="mylogo"/>
                    </div>
                </div>
                <div className ="col-lg-4">
                    <h3>Daily Serotonin</h3>
                    <b>Technology Used:</b> Java, Android Studio<br></br><br></br>
                    My first experience with mobile development. Wanted to create an app that focused on good news instead of the 
                    constant cycle of negative news reporting in mainstream media. User can press the button to be sent a random 
                    positive news article, and can choose to have the app set a reminder to view a positive article at any time.
                    <p><Link href="https://github.com/Salm9n/DailySerotoninApp"><a>Github Link.</a></Link></p>
                </div>
            </div>
            <div className="row row2 align-items-center border-top">
                <div className="col-lg-8">
                    <div className="resize-bigger">
                        <Image src={nba} alt="mylogo"/>
                    </div>
                </div>
                <div className ="col-lg-4">
                    <h3>NBA Graphs </h3>
                    <b>Technology Used:</b> C#<br></br><br></br>
                    An application i created using C#. Works with taking data and visualising it in a GUI. Main portal links 
                    to 4 different types of graphs visualising different NBA statistics.
                    <p><Link href="https://github.com/Salm9n/Chart-Project"><a>Github Link.</a></Link></p>
                </div>
            </div>
        </div>
        
    </>
     );
}
 
export default AboutMe;