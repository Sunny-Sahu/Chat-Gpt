import React from "react";
import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addbtn from "./assets/add-30.png";
import msgIc from "./assets/message.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import home from "./assets/home.svg";
import sendbtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImg from "./assets/chatgptLogo.svg";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img className="logo" src={gptLogo} alt="logo" />{" "}
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addbtn} alt="" className="add" />
            New Chat
          </button>
          <div className="uppersideBottom">
            <button className="query">
              <img src={msgIc} alt="Query" /> What is Programming?
            </button>
            <button className="query">
              <img src={msgIc} alt="Query" /> How to use an API
            </button>
          </div>
        </div>

        {/* here start lowerSide  */}

        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="ListItemimg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="ListItemimg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="ListItemimg" />
            Upgrade to Pro
          </div>
        </div>
      </div>

      {/* here start main folder  */}

      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg " src={userIcon} alt="gpt" />{" "}
            <p className="txt">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
              veritatis!
            </p>
          </div>
          {/* This is body section  */}
          <div className="chat bot">
            <img className="chatImg  " src={gptImg} alt="gpt" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              maiores excepturi laborum perferendis, quos deserunt? Nobis
              perspiciatis voluptas necessitatibus esse, qui, voluptate
              repellendus a voluptatum deserunt quia commodi accusantium
              doloremque eum quo ipsum! Soluta a error quis quo tenetur
              perferendis ut quos consectetur, eum suscipit hic placeat ipsam
              libero dolore deleniti facere recusandae sunt. Id minima dolorem
              nostrum ipsa quas. Ipsum at vero beatae. Adipisci omnis fuga ipsam
              velit incidunt ut earum ab perspiciatis veritatis rem quae unde
              hic ea, eligendi corporis blanditiis atque odio? Vero qui hic non
              dolore esse, alias quas ex corrupti repellendus, illo velit
              delectus officiis.lorem50 Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eveniet praesentium fugit officiis, vitae quidem
              molestiae nulla fuga molestias, tenetur beatae aliquam asperiores.
              Voluptate, vero? Impedit in corrupti deserunt voluptatem
              voluptatibus vitae sit doloremque, aut quas? Et, fugit! Unde
              asperiores, dignissimos, saepe nihil dolore eius quod architecto
              quis fuga dolorem ducimus ab deserunt ipsum molestias modi
              perspiciatis adipisci itaque, fugit voluptate possimus fugiat
              magnam! Vero cum eaque non inventore, doloribus quos minus totam
              quaerat a iste earum nisi natus saepe ipsam atque recusandae
              optio. Aperiam facere voluptate, fugiat eum debitis doloremque,
              eligendi quis harum molestiae, officiis iste sunt praesentium vero
              provident! Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Non dignissimos magni distinctio placeat ex minima,
              obcaecati neque fuga blanditiis, aliquid inventore! Odio dolores
              unde tempora id? Dolores, praesentium illo? Labore, omnis quis
              fugiat sunt a iusto reprehenderit harum tenetur aperiam, fugit,
              quia similique! Necessitatibus cupiditate reprehenderit at ex illo
              maxime, laborum quae laboriosam amet, sunt numquam earum, officia
              optio aliquam expedita soluta ab harum repudiandae culpa nesciunt?
              Officiis non ex adipisci quam repellat et iusto expedita odit
              illum nesciunt similique incidunt voluptatum harum corporis quasi
              corrupti sint praesentium modi laudantium soluta, hic itaque
              porro? Doloremque odit non voluptate facere officiis eveniet sint
              expedita a impedit similique odio neque aliquid ea, dolorum saepe,
              dignissimos tenetur architecto! Porro possimus molestiae et
              debitis? Iste magnam molestias nisi debitis. Architecto vitae
              molestias eaque vel rerum consequatur, illum culpa eveniet saepe
              fugiat nemo cum labore ipsa, deleniti atque laborum amet quos
              porro sint at minima. Officiis officia voluptatum, nemo nisi
              exercitationem quo recusandae quaerat? Omnis odio voluptates unde
              facere id, quod minus nobis, numquam natus fuga, ad obcaecati
              libero vel placeat corporis exercitationem quos. Blanditiis, iusto
              modi adipisci laborum quo exercitationem atque beatae! Incidunt
              nobis consequatur cupiditate. Iste aliquid blanditiis reiciendis
              rerum fugiat distinctio eligendi!
            </p>
          </div>
        </div>
        <div className="chatfooter">
          <div className="inp">
            <input type="text" placeholder="Send a message.." />
            <button className="send">
              <img src={sendbtn} alt="sendBtn" />
            </button>
          </div>
          <p>
            Chatgpt Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Aperiam, dolorem?
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
