import React, { useState, useEffect } from 'react';
import ImageList from './ImageList';
import './App.css';

const Themes = ({ images }) => {

    const [filteredImages, setFilteredImages] = useState([]);
    const [landscape, setLandscape] = useState(false);
    const [architecture, setArchitecture] = useState(false);
    const [wildlife, setWildlife] = useState(false);
    const [sky, setSky] = useState(false);
    const [nightsky, setNightsky] = useState(false);
    const [streets, setStreets] = useState(false);
    const [blue, setBlue] = useState(false);
    const [green, setGreen] = useState(false);
    const [red, setRed] = useState(false);
    const [purple, setPurple] = useState(false);
    const [yellow, setYellow] = useState(false);
    const [orange, setOrange] = useState(false);
    const [optimistic, setOptimistic] = useState(false);
    const [melancholy, setMelancholy] = useState(false);
    const [dreamy, setDreamy] = useState(false);

    
    function moodFilter(mood) {
        let filter = images.filter(image => image.mood === mood);
        return filter;
    }

    function colorFilter(color) {
        let filter = images.filter(image => image.color === color);
        return filter;
    }

    function themeFilter(theme) {
        let filter = images.filter(image => image.theme === theme);
        return filter;
    }

    function handleImages(e) {
        let typeImages = e.target.value;

        if (typeImages === "landscape") {
            setLandscape(!landscape);
            if (!landscape) {
                setFilteredImages(themeFilter(typeImages));
            } else {
                setFilteredImages(images);
            }
        }
        
        if (typeImages === "architecture") {
            setArchitecture(!architecture);
            if (!architecture) {
                setFilteredImages(themeFilter(typeImages));
            } else {
                setFilteredImages(images);
            }
        }

        if (typeImages === "wildlife") {
            setWildlife(!wildlife);
            if (!wildlife) {
                setFilteredImages(themeFilter(typeImages));
            } else {
                setFilteredImages(images);
            }
        }

        if (typeImages === "sky") {
            setSky(!sky);
            if (!sky) {
                setFilteredImages(themeFilter(typeImages));
            } else {
                setFilteredImages(images);
            }
        }

        if (typeImages === "nightsky") {
            setNightsky(!nightsky);
            if (!nightsky) {
                setFilteredImages(themeFilter(typeImages));
            } else {
                setFilteredImages(images);
            }
        }

        if (typeImages === "streets") {
            setStreets(!streets);
            if (!streets) {
                setFilteredImages(themeFilter(typeImages));
            } else {
                setFilteredImages(images);
            }
        }

        if (typeImages === "blue") {
            setBlue(!blue);
            if (!blue) {
                setFilteredImages(colorFilter(typeImages));
            } else {
                setFilteredImages(images);
            }
        }

        if (typeImages === "green") {
            setGreen(!green);
            if (!green) {
                setFilteredImages(colorFilter(typeImages));
            } else {
                setFilteredImages(images);
            }
        }

        if (typeImages === "red") {
            setRed(!red);
            if (!red) {
                setFilteredImages(colorFilter(typeImages));
            } else {
                setFilteredImages(images);
            }
        }

        if (typeImages === "purple") {
            setPurple(!purple);
            if (!purple) {
                setFilteredImages(colorFilter(typeImages));
            } else {
                setFilteredImages(images);
            }
        }

        if (typeImages === "yellow") {
            setYellow(!yellow);
            if (!yellow) {
                setFilteredImages(colorFilter(typeImages));
            } else {
                setFilteredImages(images);
            }
        }

        if (typeImages === "orange") {
            setOrange(!orange);
            if (!orange) {
                setFilteredImages(colorFilter(typeImages));
            } else {
                setFilteredImages(images);
            }
        }

        if (typeImages === "optimistic") {
            setOptimistic(!optimistic);
            if (!optimistic) {
                setFilteredImages(moodFilter(typeImages));
            } else {
                setFilteredImages(images);
            }
        }

        if (typeImages === "melancholy") {
            setMelancholy(!melancholy);
            if (!melancholy) {
                setFilteredImages(moodFilter(typeImages));
            } else {
                setFilteredImages(images);
            }
        }

        if (typeImages === "dreamy") {
            setDreamy(!dreamy);
            if (!dreamy) {
                setFilteredImages(moodFilter(typeImages));
            } else {
                setFilteredImages(images);
            }
        }

    }
    
    useEffect(() => {
        setFilteredImages(images);
    }, [images]); 


    return (
        <div class="themes">
            <table>
                <thead>
                    <tr>
                        <th>Themes</th>
                        <th></th>
                        <th>Colors</th>
                        <th></th>
                        <th>Moods</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><button class={landscape ? "b-active" : "button"} value="landscape" onClick={handleImages}>Landscape</button></td>
                        <td><button class={sky ? "b-active" : "button"} value="sky" onClick={handleImages}>Sky</button></td>
                        <td><button class={blue ? "b-active" : "blue-button"} value="blue" onClick={handleImages}>Blue</button></td>
                        <td><button class={green ? "b-active" : "green-button"} value="green" onClick={handleImages}>Green</button></td>
                        <td><button class={melancholy ? "b-active" : "button"} value="melancholy" onClick={handleImages}>Melancholy</button></td>
                    </tr>
                    <tr>
                        <td><button class={architecture ? "b-active" : "button"} value="architecture" onClick={handleImages}>Architecture</button></td>
                        <td><button class={wildlife ? "b-active" : "button"} value="wildlife" onClick={handleImages}>Wildlife</button></td>
                        <td><button class={orange ? "b-active" : "orange-button"} value="orange" onClick={handleImages}>Orange</button></td>
                        <td><button class={yellow ? "b-active" : "yellow-button"} value="yellow" onClick={handleImages}>Yellow</button></td>
                        <td><button class={optimistic ? "b-active" : "button"} value="optimistic" onClick={handleImages}>Optimistic</button></td>
                    </tr>
                    <tr>
                        <td><button class={streets ? "b-active" : "button"} value="streets" onClick={handleImages}>Streets</button></td>
                        <td><button class={nightsky ? "b-active" : "button"} value="nightsky" onClick={handleImages}>Night Sky</button></td>
                        <td><button class={purple ? "b-active" : "purple-button"} value="purple" onClick={handleImages}>Purple</button></td>
                        <td><button class={red ? "b-active" : "red-button"} value="red" onClick={handleImages}>Red</button></td>
                        <td><button class={dreamy ? "b-active" : "button"} value="dreamy" onClick={handleImages}>Dreamy</button></td>
                    </tr>
                </tbody>
            </table>
            <ImageList images={filteredImages}/>                            
        </div>
    );
}

export default Themes;