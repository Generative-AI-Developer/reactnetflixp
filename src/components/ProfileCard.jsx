function Profile(){
    return(
        <div>
            <h1>Profile Card Challage</h1>

            <ProfileCard 
            name = "Asif"
            age = {30}
            greeting = {
                <div>
                    <strong>hi Asif have a wonderful day!</strong>
                </div>
            }
            
            >
                <p>Hobies: Reading, Hiking</p>
                <button>Constact</button>
                </ProfileCard>

                <ProfileCard 
            name = "Muhammad"
            age = {40}
            greeting = {
                <div>
                    <strong>hi Muhammad have a wonderful day!</strong>
                </div>
            }
            
            >
                <p> coding and coding</p>
                <button>Constact</button>
                </ProfileCard>

        </div>
    )
}

export default Profile




function ProfileCard({name,age,greeting, children}){
// const {name,age,greeting, children} = props
    return(
        <>
        <h1>Name:{name}</h1>
        <p>Age: {age}</p>
        <p>{greeting}</p>
        <div>{children}</div>
    </>
        )
}