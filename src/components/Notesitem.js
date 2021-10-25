import {React,useContext} from 'react'
import notecontent from '../context/notes/NoteContext';


export default function Notesitem(props) {
    const {deleting}=useContext(notecontent);
    const {note,updatenote,showAlert}=props;
    return (
        <div className="col-md-3 my-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fas fa-edit"  onClick={()=>{updatenote(note)}}></i>
                    <i className="fas fa-trash"  onClick={()=>{deleting(note._id);showAlert("Deleted successFully","success");}}></i>
                </div>
            </div>
       </div>
    )
}
