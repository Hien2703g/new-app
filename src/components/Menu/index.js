function Menu(){
    const arrayMenu=[
        "Trang chu", 
        "San pham",
        "Tin tuc",
        "Gioi thieu",
        "lien he",
    ];
    
    return (
      <>
        {/* <ul>
          {arrayMenu.map((item, index) => {
            console.log(item,index);
            return (
                <li key={index}>{item}</li>
            );
          })}
        </ul> */}
        <ul>
          {arrayMenu.map((item,index)=>(<li key={index}>{item}</li>))}
        </ul>
        

      </>
    );

}
export default Menu;