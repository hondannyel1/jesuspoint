import jpimage from './assets/jp.jpeg.jpeg';


  
function PastorBirthdayApp() {
  return ( <>
    <div className="card">
      <h1 className='Greetings'>Happy Birthday, Pastor Henfy!</h1>
      <img className='image' src={jpimage} alt="Pastor Henfy" />

    <div className="content">
      <p>please enter the special code below to access the exclusive birthday content!</p>
    <label htmlFor="month"> MONTH:</label>
    <input type="number" id="month" name="month" placeholder='00' maxLength={2} />
    <br />
 <label htmlFor="day"> DAY:</label>
    <input type="number" id="day" name="day" placeholder="00" maxLength={2} />
  </div>

 <button className='enter-button'
   >ENTER</button> 













</div>








</>
);
}
export default PastorBirthdayApp

