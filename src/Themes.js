import React from 'react';
import './App.css';

const Themes = () => {
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
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><button class="button">Landscape</button></td>
                        <td><button class="button">Sky</button></td>
                        <td><button class="blue-button">Blue</button></td>
                        <td><button class="green-button">Green</button></td>
                        <td><button class="button">Happy</button></td>
                        <td><button class="button">Melancholy</button></td>
                    </tr>
                    <tr>
                        <td><button class="button">Architecture</button></td>
                        <td><button class="button">Wildlife</button></td>
                        <td><button class="orange-button">Orange</button></td>
                        <td><button class="yellow-button">Yellow</button></td>
                        <td><button class="button">Gloomy</button></td>
                        <td><button class="button">Optimistic</button></td>
                    </tr>
                    <tr>
                        <td><button class="button">Night Sky</button></td>
                        <td><button class="button">Streets</button></td>
                        <td><button class="purple-button">Purple</button></td>
                        <td><button class="red-button">Red</button></td>
                        <td><button class="button">Calm</button></td>
                        <td><button class="button">Dreamy</button></td>
                    </tr>
                </tbody>
            </table>                       
        </div>
    );
}

export default Themes;