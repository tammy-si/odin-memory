import React, {useState} from 'react';
import Card from './card';

function Overview(props) {
  const [ponies, setPonies] = useState([
  {
    name: "Twillight Sparkle",
    img_url: "https://upload.wikimedia.org/wikipedia/en/b/b4/PrincessTwilightSparkle.png",
  },
  {
    name: "Applejack",
    img_url: "https://www.giantbomb.com/a/uploads/scale_medium/46/462814/3222913-2949452199-latest.jpg"
  },
  {
    name: "Fluttershy",
    img_url: "https://png.pngitem.com/pimgs/s/203-2030072_fluttershy-png-pic-fluttershy-png-transparent-png.png",
  },
  {
    name: "Rarity",
    img_url: "https://static.miraheze.org/greatcharacterswiki/a/af/Rarity.png",
  },
  {
    name: "Pinkie Pie",
    img_url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/174d3d97-abef-4ded-8389-050b39a77d21/dcvicl8-caf0eddb-55ef-4f9f-8fba-1340bc3c99fa.png/v1/fill/w_1600,h_1611/pinkie_pie__shocked___2_by_thehylie_dcvicl8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYxMSIsInBhdGgiOiJcL2ZcLzE3NGQzZDk3LWFiZWYtNGRlZC04Mzg5LTA1MGIzOWE3N2QyMVwvZGN2aWNsOC1jYWYwZWRkYi01NWVmLTRmOWYtOGZiYS0xMzQwYmMzYzk5ZmEucG5nIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.00-58uB0-2G8i_xvdMoF8XKSVi-uO_gIpYgRSHMuGgc",
  },
  {
    name: "Rainbow Dash",
    img_url: "https://mlpforums.com/uploads/monthly_2022_03/342571439_RainbowDashstanding(S03E07)byDJDavid98onDeviantArt.png.d2983ff1f5abe6d098bd32f8a5320585.png",
  },
  {
    name: "Spike",
    img_url: "https://i.pinimg.com/474x/72/4c/99/724c999e4855dbf79434cfd27d8bf46f--squirrels-unicorn.jpg",
  },
  {
    name: "Princess Celestia",
    img_url: "https://1.bp.blogspot.com/-o1HUf8-EDO8/XXiA2QveVgI/AAAAAAAD30s/6ZByWqVThJoYValycyrGQzZuEjCDIfqdgCLcBGAsYHQ/s1600/Screen%2BShot%2B2019-08-07%2Bat%2B1.31.53%2BPM.png",
  },
  {
    name: "Princess Luna",
    img_url: "https://static.tvtropes.org/pmwiki/pub/images/princess_luna.png",
  },
  {
    name: "Princess Candance",
    img_url: "https://i.pinimg.com/originals/64/27/b4/6427b4f1b53943f558444a6c644c3dc3.png",
  },
  {
    name: "Derpy",
    img_url: "https://typewritermonkeys.files.wordpress.com/2013/05/derpy-hooves.png",
  },
  {
    name: "Shining Armor",
    img_url: "https://static.miraheze.org/mylittleponywiki/thumb/c/c3/Shining_Armor_Squared.png/640px-Shining_Armor_Squared.png",
  }
])

  // Declare a new state variable, which we'll call "count"
  return (
    <div className="cards">
      {ponies.map((pony) => {
        return <Card name={pony.name} img_url={pony.img_url}/>
      })}
    </div>
  );
}

export default Overview