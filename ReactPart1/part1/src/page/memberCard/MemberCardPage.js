import React, { useState } from 'react'
import Card from '../../component/card/Card'
import imageList from '../../resources/imageList.js'
import loremList from '../../resources/loremList.js'
import './MemberCardPage.style.scss'

function MemberCardPage() {
    const [memberData, changeMemberData] = useState([
        { Name: "Miss Krittikamas Sunophak", id: "62010029", img: imageList[0], detail: loremList[0] }
        , { Name: "Miss Khampeerada Poothong", id: "62010090", img: imageList[1], detail: loremList[1] }
        , { Name: "Mr. Patcharapol Prompang", id: "63015117", img: imageList[2], detail: loremList[2] }
        , { Name: "Mr. Sarayut Aree", id: "63015166", img: imageList[3], detail: loremList[3] }
        , { Name: "Mr. Sarin Hongthong", id: "63015183", img: imageList[4], detail: loremList[4] }
    ])
    return (
        <div className='MemberCardPage'>
            <div className='group-page-header'>Group's Members</div>
            <div className='member'>
                <div>
                    {memberData.map((member) =>
                        <Card member={member} />
                    )}
                </div>

            </div>
        </div>
    )
}

export default MemberCardPage