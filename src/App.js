import React, {Fragment} from 'react'
import './App.css'
import Button from "./components/Button"
import ShopArticle from "./components/ShopArticle"
import Tile from './components/Tile'
import BagOne from './assets/bag_1.png'
import BagTwo from './assets/bag_2.png'
import BagThree from './assets/bag_3.png'
import BagFour from './assets/bag_4.png'
import Brand from './assets/brand.png'
import Hugs from './assets/our_story.png'

function App() {
    return (
        <Fragment>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    buttonType="button"
                    dis={false}
                    bName='to the collection'/>
                <Button
                    buttonType="button"
                    dis={false}
                    bName='shop all bags'/>
                <Button
                    buttonType="button"
                    dis={true}
                    bName='pre-orders'/>
            </nav>
            <main>
                <ShopArticle
                    label='Best seller'
                    image={BagOne}
                    description='The handy bag'
                    price='€400,-'
                />
                <ShopArticle
                    label='Best seller'
                    image={BagTwo}
                    description='The stylish bag'
                    price='€250,-'
                />
                <ShopArticle
                    label='New collection'
                    image={BagThree}
                    description='The simple bag'
                    price='€300,-'
                />
                <ShopArticle
                    label='New collection'
                    image={BagFour}
                    description='The trendy bag'
                    price='€150,-'
                />

            </main>
            <footer>
                <Tile
                    image={Brand}
                    imageAlt='box'
                />
                <Tile title="The Brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem debitis dolor doloribus error,
                        molestiae nam numquam possimus, praesentium quae, ratione recusandae sunt veniam. Architecto
                        facere praesentium sapiente sunt tempora.</p>
                </Tile>
                <Tile title="our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem debitis dolor doloribus error,
                        molestiae nam numquam possimus, praesentium quae, ratione recusandae sunt veniam. Architecto
                        facere praesentium sapiente sunt tempora.</p>
                </Tile>
                <Tile
                    image={Hugs}
                    imageAlt='hugging-people'/>
            </footer>
        </Fragment>
    )
        ;
}

export default App;



