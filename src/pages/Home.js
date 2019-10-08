import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import FieldBox from '../components/FieldBox'
import Footer from '../components/Footer'
import './styles/Home.css'
const Home = () => {
    return (
        <>
            <Header selected='home' />
            <Banner />
            <div className='main'>
                <h1>Fields</h1>
                <div className='fields-box'>
                    <FieldBox title="medicine" university="Ain Shams Universtiy" content="This is a question bank for the second year of medical school hgdm fdkns fkdnf knfdkn kjfdkjn kfjdkjfkd" />
                    <FieldBox title="sciences" university="Cairo Universtiy" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend mi vel pharetra fermentum." />
                    <FieldBox title="engineering" university="Ain Shams Universtiy" content="Phasellus in mi id turpis maximus porta in vestibulum ex. Sed consectetur est non ornare volutpat." />
                    <FieldBox title="veterinary" university="Cairo Universtiy" content="Quisque quis odio at odio vulputate ornare congue nec tortor. Nulla ultricies ultrices leo sit amet finibus." />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
