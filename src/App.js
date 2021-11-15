import './App.css';
import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import toolbarmock from './toolbarmock.png'

function MyEditor(){
  const editorRef = useRef(null);

  return (
    <div className="ml5 mr5 mt1 mb2 ba b--light-gray shadow-4 bg-white">
    <Editor
       onInit={(evt, editor) => editorRef.current = editor}
       initialValue="Use the toolbar above to edit this content.<br><br>"
       init={{
         height: 200,
         menubar: false,
         inline: true,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount noneditable'
         ],
         toolbar: 'undo redo | formatselect | ' +
         'bold italic backcolor | alignleft aligncenter ' +
         'alignright alignjustify | bullist numlist outdent indent | ' +
         'removeformat | help',
         content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
       }}
     />
  </div>
  )
}

function App() {
  const [myEditors, setMyEditors] = useState([<MyEditor />])
  const [counter, setCounter] = useState(0)

  function appendEditor(){
    let myEditorsTemp = myEditors.slice()
    myEditorsTemp.push(<MyEditor count={counter}/>)
    setMyEditors(myEditorsTemp)
    setCounter(prevValue => prevValue + 1)
  }

  return (
    <>
    <div className='bg-near-white'>
      <div className='ml5'>
        <img src={toolbarmock} />
      </div>
      <p className='ml5'>Press the append button to add another area that you can edit with this tool bar.</p>
      <button onClick={appendEditor} className='pointer ml5'>Append</button>
      <div style={{'margin-top':'100px'}}>
        {myEditors}
      </div>
    </div>
 

      </>
  );
}

export default App;
