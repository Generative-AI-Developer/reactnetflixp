export const Practices = ()=> {
    const students  = []
    return (

        <>
        {/* <p>{students.length && "No Student found"}</p> */}
        {/* 1st Methode */}
        <p>{students.length === 0 && "No Student found"}</p>

        Number of Student: {students.length}
        </>


    )
}