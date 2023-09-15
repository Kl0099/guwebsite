import React from 'react'

export default function DirectLink(){
  const Arrayoftopcs=[
    {
     id:1,
     title:'QuestionBank' ,
     topics:"here the QuestionBank of all of the subject in semester 1"
    },
    {
     id:2,
     title:'QuestionBank-solution' ,
     topics:"here the solution of QuestionBank  of all the subject in semester 1"
    },
    {
     id:3,
     title:'PPT' ,
     topics:"here the PPT pdf of all of the subject odf semester 1"
    },
    {
     id:1,
     title:'Labmanual' ,
     topics:"here the Labmanual of all of the subject odf semester 1"
    },
  ]

  const container =[
    [
      
      {
        id:1,
        name:"FME",
        topic:`QuestionBank of FME subject`,
        link:"https://drive.google.com/file/d/1cOwZ-LPMY5cIn0zA_ZwhR-jIR2cdKF5r/view?usp=drive_link"
      },
      {
        id:2,
        name:"BEE",
        topic:`QuestionBank of BEE subject`,
        link:"https://drive.google.com/file/d/1zsEx9pFr_5QRxpANDaYD4xHTQfjol72G/view?usp=drive_link"
      },
      {
        id:3,
        name:"EP",
        topic:`QuestionBank of EP subject`,
        link:"https://drive.google.com/file/d/1AymFNZrHYBIFEobgbkoS8V7vogttkN1R/view?usp=drive_link"
      },
      {
        id:4,
        name:"EM-1",
        topic:`QuestionBank of EM-1 subject`,
        link:"https://drive.google.com/file/d/1q-MlKKN3b6zEvEqy-xXnIzNIps7z5fBA/view?usp=drive_link"
      },
      {
        id:5,
        name:"ETC-1",
        topic:`QuestionBank of ETC-1 subject`,
        link:"https://drive.google.com/file/d/1NsP6o0oCc05LZ1uXypGwjWV1zvHzvOZL/view?usp=drive_link"
      },
    ],
    
    [
      {
        name:"FME",
        topic:`QuestionBank-solution of FME subject`,
        link:"https://drive.google.com/file/d/1FtOB-5SdYieguoIX98iACklUnTVcL-4U/view?usp=drive_link"
      },
      {
        name:"BEE",
        topic:`QuestionBank-solution of BEE subject`,
        link:"https://drive.google.com/file/d/1zsEx9pFr_5QRxpANDaYD4xHTQfjol72G/view?usp=drive_link"
      },
      {
        name:"EP",
        topic:`QuestionBank-solution of EP subject`,
        link:"https://drive.google.com/file/d/1AymFNZrHYBIFEobgbkoS8V7vogttkN1R/view?usp=drive_link"
      },
      {
        name:"EM-1",
        topic:`QuestionBank-solution of EM-1 subject`,
        link:"https://drive.google.com/file/d/1q-MlKKN3b6zEvEqy-xXnIzNIps7z5fBA/view?usp=drive_link"
      },
      {
        name:"ETC-1",
        topic:`QuestionBank of ETC-1 subject`,
        link:"https://drive.google.com/file/d/1NsP6o0oCc05LZ1uXypGwjWV1zvHzvOZL/view?usp=drive_link"
      },
    ],
    
    
    [
      {
        name:"FME",
        topic:`PPT-pdf of FME subject`,
        link:"https://drive.google.com/drive/folders/1f9lr8jXzeLKOerNyhFZPQM35jzK1G0x1?usp=drive_link"
      },
      {
        name:"BEE",
        topic:`PPT-pdf of BEE subject`,
        link:"https://drive.google.com/file/d/1zsEx9pFr_5QRxpANDaYD4xHTQfjol72G/view?usp=drive_link"
      },
      {
        name:"EP",
        topic:`PPT-pdf of EP subject`,
        link:"https://drive.google.com/file/d/1AymFNZrHYBIFEobgbkoS8V7vogttkN1R/view?usp=drive_link"
      },
      {
        name:"EM-1",
        topic:`PPT-pdf of EM-1 subject`,
        link:"https://drive.google.com/file/d/1q-MlKKN3b6zEvEqy-xXnIzNIps7z5fBA/view?usp=drive_link"
      },
      {
        name:"ETC-1",
        topic:`PPT-pdf of ETC-1 subject`,
        link:"https://drive.google.com/file/d/1NsP6o0oCc05LZ1uXypGwjWV1zvHzvOZL/view?usp=drive_link"
      },
    ], 
    
    [
      {
        name:"FME",
        topic:`Labmanual of FME subject`,
        link:"https://drive.google.com/file/d/1cOwZ-LPMY5cIn0zA_ZwhR-jIR2cdKF5r/view?usp=drive_link"
      },
      {
        name:"BEE",
        topic:`Labmanual of BEE subject`,
        link:"https://drive.google.com/file/d/1zsEx9pFr_5QRxpANDaYD4xHTQfjol72G/view?usp=drive_link"
      },
      {
        name:"EP",
        topic:`Labmanual of EP subject`,
        link:"https://drive.google.com/file/d/1AymFNZrHYBIFEobgbkoS8V7vogttkN1R/view?usp=drive_link"
      },
      {
        name:"EM-1",
        topic:`Labmanual of EM-1 subject`,
        link:"https://drive.google.com/file/d/1q-MlKKN3b6zEvEqy-xXnIzNIps7z5fBA/view?usp=drive_link"
      },
      {
        name:"ETC-1",
        topic:`Labmanual of ETC-1 subject`,
        link:"https://drive.google.com/file/d/1NsP6o0oCc05LZ1uXypGwjWV1zvHzvOZL/view?usp=drive_link"
      },
      {
        name:"workshop",
        topic:`Labmanual of workshop`,
        link:"https://drive.google.com/file/d/1NsP6o0oCc05LZ1uXypGwjWV1zvHzvOZL/view?usp=drive_link"
      },
    ]
  ]
  const QuestionBank = [
    {
      id:1,
      name:"FME",
      topic:`QuestionBank of FME subject`,
      link:"https://drive.google.com/file/d/1cOwZ-LPMY5cIn0zA_ZwhR-jIR2cdKF5r/view?usp=drive_link"
    },
    {
      id:2,
      name:"BEE",
      topic:`QuestionBank of BEE subject`,
      link:"https://drive.google.com/file/d/1zsEx9pFr_5QRxpANDaYD4xHTQfjol72G/view?usp=drive_link"
    },
    {
      id:3,
      name:"EP",
      topic:`QuestionBank of EP subject`,
      link:"https://drive.google.com/file/d/1AymFNZrHYBIFEobgbkoS8V7vogttkN1R/view?usp=drive_link"
    },
    {
      id:4,
      name:"EM-1",
      topic:`QuestionBank of EM-1 subject`,
      link:"https://drive.google.com/file/d/1q-MlKKN3b6zEvEqy-xXnIzNIps7z5fBA/view?usp=drive_link"
    },
    {
      id:5,
      name:"ETC-1",
      topic:`QuestionBank of ETC-1 subject`,
      link:"https://drive.google.com/file/d/1NsP6o0oCc05LZ1uXypGwjWV1zvHzvOZL/view?usp=drive_link"
    },
  ]
  const PPT = [
    {
      name:"FME",
      topic:`PPT-pdf of FME subject`,
      link:"https://drive.google.com/drive/folders/1f9lr8jXzeLKOerNyhFZPQM35jzK1G0x1?usp=drive_link"
    },
    {
      name:"BEE",
      topic:`PPT-pdf of BEE subject`,
      link:"https://drive.google.com/file/d/1zsEx9pFr_5QRxpANDaYD4xHTQfjol72G/view?usp=drive_link"
    },
    {
      name:"EP",
      topic:`PPT-pdf of EP subject`,
      link:"https://drive.google.com/file/d/1AymFNZrHYBIFEobgbkoS8V7vogttkN1R/view?usp=drive_link"
    },
    {
      name:"EM-1",
      topic:`PPT-pdf of EM-1 subject`,
      link:"https://drive.google.com/file/d/1q-MlKKN3b6zEvEqy-xXnIzNIps7z5fBA/view?usp=drive_link"
    },
    {
      name:"ETC-1",
      topic:`PPT-pdf of ETC-1 subject`,
      link:"https://drive.google.com/file/d/1NsP6o0oCc05LZ1uXypGwjWV1zvHzvOZL/view?usp=drive_link"
    },
  ]
  const QuestionBanksolution = [
    {
      name:"FME",
      topic:`QuestionBank-solution of FME subject`,
      link:"https://drive.google.com/file/d/1FtOB-5SdYieguoIX98iACklUnTVcL-4U/view?usp=drive_link"
    },
    {
      name:"BEE",
      topic:`QuestionBank-solution of BEE subject`,
      link:"https://drive.google.com/file/d/1zsEx9pFr_5QRxpANDaYD4xHTQfjol72G/view?usp=drive_link"
    },
    {
      name:"EP",
      topic:`QuestionBank-solution of EP subject`,
      link:"https://drive.google.com/file/d/1AymFNZrHYBIFEobgbkoS8V7vogttkN1R/view?usp=drive_link"
    },
    {
      name:"EM-1",
      topic:`QuestionBank-solution of EM-1 subject`,
      link:"https://drive.google.com/file/d/1q-MlKKN3b6zEvEqy-xXnIzNIps7z5fBA/view?usp=drive_link"
    },
    {
      name:"ETC-1",
      topic:`QuestionBank of ETC-1 subject`,
      link:"https://drive.google.com/file/d/1NsP6o0oCc05LZ1uXypGwjWV1zvHzvOZL/view?usp=drive_link"
    },
  ]
  const Labmanual = [
    {
      name:"FME",
      topic:`Labmanual of FME subject`,
      link:"https://drive.google.com/file/d/1cOwZ-LPMY5cIn0zA_ZwhR-jIR2cdKF5r/view?usp=drive_link"
    },
    {
      name:"BEE",
      topic:`Labmanual of BEE subject`,
      link:"https://drive.google.com/file/d/1zsEx9pFr_5QRxpANDaYD4xHTQfjol72G/view?usp=drive_link"
    },
    {
      name:"EP",
      topic:`Labmanual of EP subject`,
      link:"https://drive.google.com/file/d/1AymFNZrHYBIFEobgbkoS8V7vogttkN1R/view?usp=drive_link"
    },
    {
      name:"EM-1",
      topic:`Labmanual of EM-1 subject`,
      link:"https://drive.google.com/file/d/1q-MlKKN3b6zEvEqy-xXnIzNIps7z5fBA/view?usp=drive_link"
    },
    {
      name:"ETC-1",
      topic:`Labmanual of ETC-1 subject`,
      link:"https://drive.google.com/file/d/1NsP6o0oCc05LZ1uXypGwjWV1zvHzvOZL/view?usp=drive_link"
    },
    {
      name:"workshop",
      topic:`Labmanual of workshop`,
      link:"https://drive.google.com/file/d/1NsP6o0oCc05LZ1uXypGwjWV1zvHzvOZL/view?usp=drive_link"
    },
  ]

  return (
    <div>
      <div>
      <h1>firstsemester students section</h1>
      </div>
      {/* <div className="conntainer">
        <h2>questionbank</h2>
        <ul className="cards">
          {
            QuestionBank.map((curr)=>{
              return(
               
                <li id={curr} className='card'>
                  <div>
              <h3 className="card-title">{curr.name}</h3>
              <div className="card-content">
                <p>{curr.topic}</p>
              <p>here all cheapters are covered in this question bank.make sure that this question are only for practice. </p>
              </div>
            </div>
            <div className="card-link-wrapper">
              {
                curr.link !== ""?
                 <a key={curr} href={curr.link} className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
                 : <p>currently unavailable</p>
              }
              
            </div>
                </li>
              )
            }
            )
          }
        </ul>
      </div> */}

      <div>
        {
          container.map((curr)=>{
            return(
             
               
                <ul className="cards">
                  {
                    curr.map((index)=>{
                      return(
                        <li id={index} className="card">
                          <div>
                            <h3 className="card-title">{index.name}</h3>
                            <div className="card-content">
                              <p>{index.topic}</p>
                           </div>
                          </div>
                          <div className="card-link-wrapper">
                             {
                               index.link !== ""?
                                <a key={index} href={index.link} className='material_download_link card-link' target="_blank" rel="noopener noreferrer">Download</a>
                                : <p>currently unavailable</p>
                             }
                          </div>
                        </li>
                      ) 
                      
                    })
                  }
                </ul>
             
            )
          })
        }
      </div>

    </div>
  )
}





