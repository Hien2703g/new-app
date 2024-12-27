import { country } from "../data/country";
// import  "./Country.css";
import "./Country.scss"

function Country() {
    console.log(country);
    return (
      <>
        <ul className="coutry">
          {(country || []).map((item) => (
            <li className="country_item" key={item.id}>
              <span className="country_text">{item.name}</span>
              <ul className="country_sub">
                {(item.city || []).map((itemcty) => (
                  <li className="country_sub-item" key={itemcty.id}>
                    <span className="country_sub-item-text">
                      {itemcty.name}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </>
    );
}
export default Country;