import styled from "styled-components"
import Photo from "./Photo"

const DivContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
margin:30px;`

const PhotoSection = ({ feedsource }) => {

    return (
        <DivContainer>
            {feedsource.map(data => (
                <Photo
                    image={data.source}
                    key={data.id}
                    likes={data.likes}
                />
            ))}
        </DivContainer>
    )
}

export default PhotoSection
