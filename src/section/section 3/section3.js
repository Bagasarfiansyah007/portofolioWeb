import './section3.css';
import React from 'react';
import Button2 from '../../Komponen/Button 2/Button2';

class Section3 extends React.Component {
    
    render() {
        const Portofolio = [
            {
                "judul": "Exploration Akademika",
                "subjudul": "Exploration UI @League.dji",
                "kategori": "UI Exploration",
                "deksripsi": "Create UI Design Challenge from League.dji by designjam. Akademika  is an application that helps students to manage their assignments so students don't forget to do their assignments",
                "gambar": "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Leaguedji.webp",
                "link": "#"
            },
            {
                "judul": "Study Case Diceritain",
                "subjudul": "Exploration UX @Diceritain",
                "kategori": "Study case",
                "deksripsi": "Create UI/UX From Study Case of Diceritain Application for Optimization of Process Flow & Interface Convenience in the Peer Counselor Application Ordering & Chatting Feature",
                "gambar": "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/diceritain.webp",
                "link": "#"
            },
            {
                "judul": "awokaokaodkawdkawodkawok",
                "subjudul": "Exploration UX @Diceritain",
                "kategori": "Study case",
                "deksripsi": "Create UI Design Challenge from League.dji by designjam. Akademika  is an application that helps students to manage their assignments so students don't forget to do their assignments",
                "gambar": "https://raw.githubusercontent.com/Bagasarfiansyah007/Portofolio-asset/main/Leaguedji.webp",
                "link": "#"
            }
        ]

        const rows = [];
        let i = 0;
        let kondisi = true
        while (i < Portofolio.length && kondisi == true) {
            if (i < 2 ) {
                rows.push(
                    <div className='akademika'>
                        <div className='header'>
                            <div className='text'>
                                <h6>{Portofolio[i].subjudul}</h6>
                                <h2>{Portofolio[i].judul}</h2>
                                <p>{Portofolio[i].deksripsi}</p>
                            </div>
                            <div className='buttoncol'>
                                <Button2 nama="View Detail"/>
                            </div>
                        </div>
                        <div className='image'>
                            <img src={Portofolio[i].gambar}></img>
                        </div>
                    </div>
                );
            } else {
                rows.push(
                    <Button2 warnaFont="#2D81FF" border="1px solid #2D81FF" warna="white" nama="Read More"/>
                );
                kondisi = false;
            }
            i++;
        }

        return (
            <div className='section3'>
                {rows}
            </div>
        );
    }
}

export default Section3;