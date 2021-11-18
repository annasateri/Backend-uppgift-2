import React from 'react';
import newInImage from '../assets/images/newInImg1.png';
import newIn from '../assets/images/newIn.png';

const NewIn = () => {
    return (
<div className="new-in">
    <div className="container pt-5">
        <div className="mt-0">

            <div className="row">
                <img className="card-img-top w-100" src={newInImage} alt="..." />
            </div>
        </div>
        <div className="text-center mt-5">
            <img className="card-img-top w-50" src={newIn} alt="..." />
            <div className="card-body-cascade text-center mt-3">
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique sed debitis accusantium, sapiente quae non aut architecto odit vitae inventore molestias, saepe quasi!<br/>Consectetur ducimus nulla corporis explicabo numquam aliquid in sit praesentium culpa iste officiis quisquam mollitia odio assumenda dolorum nesciunt corrupti, quam facere sunt sed. Nostrum, exercitationem nemo.</p>
                <p className="card-text mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore cum possimus quod animi aperiam dolorem adipisci fugiat et odio. Laboriosam sapiente nam quidem animi, voluptates sequi quam! Quaerat, at quis.<br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi nobis dolorem iusto amet ipsam, fugit totam atque architecto, voluptates tenetur eveniet praesentium alias ab fugiat, minus nisi. Est blanditiis, expedita libero omnis, vero unde a id consectetur at itaque aliquid.</p>
                <p className="card-text mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi cum a similique nisi sunt culpa dignissimos adipisci harum reprehenderit accusantium?<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, esse similique alias, autem ut totam cumque aut reprehenderit illum animi consequuntur numquam eum quia quasi molestias, officiis accusantium aperiam porro.</p>
            </div>
        </div>

        {/* <div className="card shadow-0 card-cascade wider reverse">
    </div> */}
    </div>
</div>
    )
}

export default NewIn