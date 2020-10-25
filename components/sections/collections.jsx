import CollectionCard from '../cards/collectionCard'
const Collections = () => {
    return ( 
        <div className="container">
       <CollectionCard img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/winter_collection_bg.jpg" title=" Winter Collection" subTitle="STYLISH AND WARM"/>
       <CollectionCard img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/spring_collection_bg.jpg" title=" Spring Collection" subTitle="BRIGHT AND COLORFUL"/>
       <CollectionCard img="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/09/autumn_collection_bg.jpg" title=" Autumn Collection" subTitle="RICH AND COMFORTABLE"/>
      </div>
      
     );
}
 
export default Collections;