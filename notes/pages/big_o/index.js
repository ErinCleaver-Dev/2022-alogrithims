import Image from 'next/image'
import styles from '../../styles/Notes.module.css'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'

export default function Big_O() {
  return (
    <div>
      <Header
        title={"Notes"}
      />

      <main className={styles.main}>
        <Sidebar sidebarFormat={styles.sidebar}/>
        <div className={styles.container}>
          <h2 className={styles.title}>Big_O</h2>
          <div className={styles.notesContainer}>
            <ul >
              <li>
                The offical term is Big O, asymptoic analysis.  
              </li>
              <li>
                  What matters is how well the problem is solved.  
              </li>
              <li>
                Lets us know how will the problem was solved
              </li>
              <li>
                It will be used to with its different notation to distinguish that code from what is good code. Also help us find great code.  
              </li>
              <li>
                It is part of the fundation for becoming a greate deveopler.
              </li>
              <li>
                Comes up muliple times in the course
              </li>
            </ul>
          </div>
          <h3 className={styles.subSectionTitle}>
              What makes good code?
          </h3>
          <div className={styles.notesContainer}>
            
            <ul>
              <li>
                Readable: Meaning that your code should be clean and easy for others to understand.  
              </li>
              <li>
                Scalable:  This means the code can allow for an application to be salable and the limit as to how large the code can be expanded.  
              </li>
            </ul>
            <div className={styles.codeExampleContainer}>
              <h3  className={styles.subSectionTitle}>
                SvelteDodgerbluePrediction example 
              </h3>
              <ul>
                <li>{`const nemo = ['nemo'];`}</li>
                <br/>
                <li>{`// a function to findNemo in an array`}</li>
                <br/>
                <li>
                  {`function findNemo(array) {`}
                </li>
                  <ul>
                    <li>
                    // used a for loop to find nemo
                    </li>
                    <li>
                      {`for (let i = 0; i < array.length; i++) {`}
                    </li>
                    <ul>
                      <li>
                        {"if(array[i] === 'nemo') {"}
                      </li>
                      <ul>
                        <li>
                          {"console.log('Found Nemo!');"}
                        </li>
                      </ul>
                      <li>
                        {"}"}
                      </li>
                    </ul>
                    <li>
                      {"}"}
                    </li>
                  </ul>
                  <li>
                    {"findNemo(nemo)"}
                  </li>
              </ul>
            </div>
          </div>
          <h3 className={styles.subSectionTitle}>
            Big O and Scalability
          </h3>
          <div className={styles.notesContainer}>
            <ul>
              <li>
                
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
