import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import PublishIcon from '@material-ui/icons/Publish';



export default function AcceptMaxFiles({
  setHover,
  hover,
  uploadFile,
  data,
}) {
  const onDrop=useCallback(([file])=>{
    
    uploadFile({variables:{file}})
  })
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isDragActive
  } = useDropzone({
    onDrop,
    maxFiles:1
  },);
 
  
  
  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      1 archivo {file.name}
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors  }) => { 
   return (
     <li key={file.path}>
          {file.path} - {file.size} bytes
          <ul>
            {errors.map(e => <li key={e.code}>{e.message}</li>)}
         </ul>

     </li>
   ) 
  });
  
  return (
    <section className="container" style={{textAlign:"center", margin:"auto"}}>
      <div
       {...getRootProps({ className: 'dropzone' })}
       onPointerOver={()=>setHover(true)}
       onPointerLeave={()=>setHover(false)}
       >
        <input {...getInputProps()} />
        <p>{isDragActive?"ya puedes soltar para enviar invitación a cada usuario en lista." :"Arrastra algun archivo CSV, o haz click para seleccionar archivo."}</p>
        <PublishIcon style={{fontSize:"75px", marginTop:"30px"}}/>
    {acceptedFileItems}
      </div>
    </section>
  );
}
