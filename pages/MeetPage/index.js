import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import './meetpage.css';
import CustomButton from '../../comps/CustomButton';
import Menu from '../../comps/Menu';
import Header from '../../comps/Header';

import {data, ChangeData} from '../../data';
console.log(data);

const backBtn = require('./SVG/back_btn.svg');

const sharkSize = require('./SVG/Small_Shark.svg');

const sharkLocation1 = require('./SVG/Tropical.svg');
const sharkLocation2 = require('./SVG/Temperate.svg');
const sharkLocation3 = require('./SVG/Polar.svg');

const safeStatus = require('./SVG/safe.svg');
const endangeredStatus = require('./SVG/endangered.svg');
const extinctStatus = require('./SVG/extinct.svg');

const sharkResult0 = require('./SVG/sharky1.svg');
const sharkResult1 = require('./SVG/catshark.svg');
const sharkResult2 = require('./SVG/dogfish.svg');
const sharkResult3 = require('./SVG/lanternshark.svg');
const sharkResult4 = require('./SVG/blacktip.svg');
const sharkResult5 = require('./SVG/pygmy.svg');
const sharkResult6 = require('./SVG/sawshark.svg');
const sharkResult7 = require('./SVG/otodus.svg');
const sharkResult8 = require('./SVG/zebra.svg');
const sharkResult9 = require('./SVG/hammerhead.svg');
const sharkResult10 = require('./SVG/hammerhead2.svg');
const sharkResult11 = require('./SVG/porbeagle.svg');
const sharkResult12 = require('./SVG/greyreef.svg');
const sharkResult13 = require('./SVG/bullshark.svg');
const sharkResult14 = require('./SVG/salmonshark.svg');
const sharkResult15 = require('./SVG/megamouth.svg');
const sharkResult16 = require('./SVG/thresher.svg');
const sharkResult17 = require('./SVG/baskingshark.svg');
const sharkResult18 = require('./SVG/whaleshark.svg');
const sharkResult19 = require('./SVG/greatwhite.svg');
const sharkResult20 = require('./SVG/pacificsleeper.svg');
const sharkResult21 = require('./SVG/tigershark.svg');
const sharkResult22 = require('./SVG/bluntnoseshark.svg');
const sharkResult23 = require('./SVG/greenland.svg');

const MeetPage = ({backbtn, sharksize, 
    sharklocation1, sharklocation2, sharklocation3,
    safestatus, endangeredstatus, extinctstatus, 
    sharkresult0, sharkresult1, sharkresult2, sharkresult3, sharkresult4, 
    sharkresult5, sharkresult6, sharkresult7, sharkresult8, sharkresult9,
    sharkresult10, sharkresult11, sharkresult12, sharkresult13, sharkresult14,
    sharkresult15, sharkresult16, sharkresult17, sharkresult18, sharkresult19,
    sharkresult20, sharkresult21, sharkresult22, sharkresult23}) => {
    const [color, setColor] = useState("#00D2AE");
    const [sharksrc, setShark] = useState(sharkresult0);
    const [sharkname, setName] = useState("Shark Name");
    const [area, setArea] = useState(sharklocation1);
    const [health, setHealth] = useState(safestatus);
    const [sizetext, setSizeText] = useState("small");
    const [areatext, setAreaText] = useState("tropical");
    const [healthtext, setHealthText] = useState("safe");

    useEffect(()=>{
        document.querySelector("#shark_result_img").style.transition="1.5s ease-out";
        setTimeout(()=>{
        document.querySelector("#shark_result_img").style.opacity="100%";
        }, 300);
    }, []);

    return <div className="meet_page" onLoad={()=>{
        window.scrollTo(0,0);
    }}> 
        <Menu />
        <Link href="/GamePage3"><div id="back_btn"><img src={backbtn} /></div></Link>
        <div id="headers">
            <Header text={"Meet Your Shark!"} fontSize={"40px"} color={"#FFF"}/>
            <div className="shark_result"><img id="shark_result_img" src={sharksrc} onLoad={() => {
                ChangeShark();
            }}/></div>
            <div id="shark_name"><Header text={sharkname} fontSize={"30px"} color={"#FFF"}/></div>
        </div>

        <div id="results">
            <div id="sections">
                <div className="sections_inner">
                    <div className="sections_img"><img id="shark_size" src={sharksize} width={"85px"} /></div>
                    <div className="sections_img"><img id="location" src={area} width={"85px"} /></div>
                    <div className="sections_img"><img id="status" src={health} width={"85px"} /></div>
                </div>
                <div className="sections_inner">
                    <div className="sections_text" id="size_text"><Header text={sizetext} fontSize={"25px"} color={"#FFF"}/></div>
                    <div className="sections_text" id="location_text"><Header text={areatext} fontSize={"25px"} color={"#FFF"}/></div>
                    <div className="sections_text" id="status_text"><Header text={healthtext} fontSize={"25px"} color={"#FFF"}/></div>
                </div>
            </div>

            <div id="fun_fact">
                <Header text={"Fun Facts About This Shark"} color={"#FFF"} fontSize={"30px"} />
            </div>
            <div id="desc">
                <div id="desc_inner"><p id="shark_fact">This shark lives in the tropics and usually lives to 500 years old. Vivamus orci dolor, porta vel velit et, bibendum sollicitudin mauris. Donec blandit, massa id malesua eleifend, nulla arcu lacinia metus. Sharks are an endangered species. Vivamus orci dolor, porta vel velit et, bibendum sollicitudin mauris. Donec blandit, massa id malesua eleifend, nulla arc.</p></div>
            </div>
            <div id="help_button">
                <Link href="/HelpPage"><CustomButton color={color} text={"HOW YOU CAN HELP"} fontsize={"30px"} onClick={() => {
                    var new_color = "#999";
                    setColor(new_color);
                }} /></Link>
            </div>
            </div>
        </div>


function ChangeShark(){
    if(data.size === "small" && data.location === "tropical" && data.status === "extinct"){
        var new_shark = sharkresult1;
        setShark(new_shark);
        var new_name = "Broadnose Catshark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark is mostly nocturnal. It often sleeps in groups during the day, and does its hunting at night." + "</br>" + "</br>" + 
        "This shark eats fish, squid, and octopus along the bottom of the ocean."
    }else if(data.size === "small" && data.location === "temperate" && data.status === "extinct"){
        var new_shark = sharkresult2;
        setShark(new_shark);
        var new_name = "Granular Dogfish Shark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark is very small — it only grows up to 28 cm." + "</br>" + "</br>" +
        "Almost nothing is known about this shark. It has been caught at around 450 m depth." + "</br>" + "</br>" +
        "This shark has only bee found around the Falkland Islands in the South Atlantic."

    }else if(data.size === "small" && data.location === "polar" && data.status === "extinct"){
        var new_shark = sharkresult1;
        setShark(new_shark);
        var new_name = "Iceland Catshark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark eats squid, bony fish, worms that live in the sea, lobsters, shrimp, and crabs." + "</br>" + "</br>" +
        "This shark has a slender body, narrowing toward the head." + "</br>" + "</br>" +
        "This shark has been caught at around 450 m depth. It is a deepwater catshark that can be found between depths of 560 m – 2060 m."
    }else if(data.size === "small" && data.location === "tropical" && data.status === "endangered"){
        var new_shark = sharkresult3;
        setShark(new_shark);
        var new_name = "Dwarf Lanternshark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endangered";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark is known to be the smallest of all the shark species." + "</br>" + "</br>" +
        "This shark is named Dwarf Lantern because it is small (dwarf) and they can glow in the dark like a lantern." + "</br>" + "</br>" +
        "The organ in its body that lets out light is called 'photophore', and it is on the shark's belly and under its fins."
    }else if(data.size === "small" && data.location === "temperate" && data.status === "endangered"){
        var new_shark = sharkresult2;
        setShark(new_shark);
        var new_name = "Spiny Dogfish";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endangered";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "Female Spiny Dogfish are pregnant for 18 – 24 months." + "</br>" + "</br>" +
        "This shark eats by biting down on prey with its sharp teeth and strong jaw." + "</br>" + "</br>" +
        "This shark can live more than 80 years."
    }else if(data.size === "small" && data.location === "polar" && data.status === "endangered"){
        var new_shark = sharkresult3;
        setShark(new_shark);
        var new_name = "African Lanternshark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endangered";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark is small — usually around 30 cm long." + "</br>" + "</br>" +
        "This shark lives in deep water, between depths of 300 – 1000 m." + "</br>" + "</br>" +
        "This shark can light up in the dark, which helps them catch prey."
    }else if(data.size === "small" && data.location === "tropical" && data.status === "safe"){
        var new_shark = sharkresult4;
        setShark(new_shark);
        var new_name = "Blacktip Reef Shark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark is eats small bony fishes, lobsters, crabs, shrimp, octopus, squid, and sometimes even sea snakes and seabirds." + "</br>" + "</br>" +
        "This shark is quite shy and usually isn't a danger to humans." + "</br>" + "</br>" +
        "This shark doesn't travel very far — it has a home range of 0.21 square miles, which is one of the smallest ranges of any shark species."
    }else if(data.size === "small" && data.location === "temperate" && data.status === "safe"){
        var new_shark = sharkresult5;
        setShark(new_shark);
        var new_name = "Spined Pygmy Shark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark can glow to camouflage themselves so predators won't catch them." + "</br>" + "</br>" +
        "This shark eats small bony fish and squid." + "</br>" + "</br>" +
        "This shark is one of the world's smallest sharks — the largest one found is 22 cm for males and 28 cm for females."
    }else if(data.size === "small" && data.location === "polar" && data.status === "safe"){
        var new_shark = sharkresult1;
        setShark(new_shark);
        var new_name = "Pale Catshark";
        setName(new_name);
        var new_sizetext = "Small";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark is mostly nocturnal — it sleeps during the day and hunts for food at night." + "</br>" + "</br>" +
        "This shark has a cylindrical body, narrowing at the tail and head." + "</br>" + "</br>" +
        "This shark eats small bony fish and squid."
    }else if(data.size === "medium" && data.location === "tropical" && data.status === "extinct"){
        var new_shark = sharkresult6;
        setShark(new_shark);
        var new_name = "Sawshark";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark is found in many areas around the world, but mostly in waters from the Indian Ocean to the southern Pacific Ocean." + "</br>" + "</br>" +
        "This shark uses its saw to dig out prey from sandy bottoms and to slash prey by agressively moving its head from side to side."
    }else if(data.size === "medium" && data.location === "temperate" && data.status === "extinct"){
        var new_shark = sharkresult7;
        setShark(new_shark);
        var new_name = "Otodus Shark";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark no longer exists." + "</br>" + "</br>" +
        "The skeleton of this shark was made of cartilage, not bone." + "</br>" + "</br>" +
        "The teeth of this shark were large triangle shapes, with smooth sharp edges."
    }else if(data.size === "medium" && data.location === "polar" && data.status === "extinct"){
        var new_shark = sharkresult8;
        setShark(new_shark);
        var new_name = "Zebra Shark";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark is nocturnal — it spends most of the day resting on the sea floor." + "</br>" + "</br>" +
        "This shark has a pale body with dark spots on it." + "</br>" + "</br>" +
        "Young Zebra Sharks have a completely different pattern — their bodies are brown with vertical stripes."
    }else if(data.size === "medium" && data.location === "tropical" && data.status === "endangered"){
        var new_shark = sharkresult10;
        setShark(new_shark);
        var new_name = "Great Hammerhead";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endangered";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark eats bony fish, smaller sharks, lobsters, crabs, shrimp, octopus, squid." + "</br>" + "</br>" +
        "This shark is a very strong swimmer, chasing its prey." + "</br>" + "</br>" +
        "This shark can be dangerous, but it rarley attacks humans."
    }else if(data.size === "medium" && data.location === "temperate" && data.status === "endangered"){
        var new_shark = sharkresult9;
        setShark(new_shark);
        var new_name = "Smalleye Hammerhead";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endangered";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark is also called the Golden Hammerhead or Curry Shark." + "</br>" + "</br>" +
        "This shark likes muddy areas with low visibility." + "</br>" + "</br>" +
        "This shark eats swimming crabs, squid, and newborn scalloped hammerhead sharks."
    }else if(data.size === "medium" && data.location === "polar" && data.status === "endangered"){
        var new_shark = sharkresult11;
        setShark(new_shark);
        var new_name = "Porbeagle Shark";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endangered";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark hunts and eats bony fishes, octopus, and squid." + "</br>" + "</br>" +
        "This shark is usually white at the bottom on its belly, and grey on top." + "</br>" + "</br>" +
        "The colour of this shark gives it good camouflage for hunting."
    }else if(data.size === "medium" && data.location === "tropical" && data.status === "safe"){
        var new_shark = sharkresult12;
        setShark(new_shark);
        var new_name = "Grey Reef Shark";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark is a very fast swimmer." + "</br>" + "</br>" +
        "This shark mostly eat free-swimming bony fishes, squids, and octopus." + "</br>" + "</br>" +
        "This shark's aggressive behaviour allows it to dominate many other shark species on the reef."
    }else if(data.size === "medium" && data.location === "temperate" && data.status === "safe"){
        var new_shark = sharkresult13;
        setShark(new_shark);
        var new_name = "Bull Shark";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark is not a true freshwater shark, even though it can survive in freshwater areas." + "</br>" + "</br>" +
        "This shark can travel far up rivers — 1100 km from the ocean, in the Mississippi River." + "</br>" + "</br>" +
        "This shark will eat almost anything it sees — fish, dolphins, and other sharks as well."
    }else if(data.size === "medium" && data.location === "polar" && data.status === "safe"){
        var new_shark = sharkresult14;
        setShark(new_shark);
        var new_name = "Salmon Shark";
        setName(new_name);
        var new_sizetext = "Medium";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark has the ability to regulate its body temperature." + "</br>" + "</br>" +
        "This shark eats salmon, squid, sablefish, and herring." + "</br>" + "</br>" +
        "This shark has long gill slits and has large teeth."
    }else if(data.size === "large" && data.location === "tropical" && data.status === "extinct"){
        var new_shark = sharkresult15;
        setShark(new_shark);
        var new_name = "Megamouth Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark lives in the deep water, and is rarely seen by humans." + "</br>" + "</br>" +
        "This shark swims with its giant mouth wide open, filtering water for plankton and jellyfish." + "</br>" + "</br>" +
        "This shark has a massive head and rubbery lips."
    }else if(data.size === "large" && data.location === "temperate" && data.status === "extinct"){
        var new_shark = sharkresult16;
        setShark(new_shark);
        var new_name = "Thresher Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark is also known as the Fox Shark." + "</br>" + "</br>" +
        "This shark is often hunted by humans for its meat, skin, and fin for human use and consumption." + "</br>" + "</br>" +
        "If you want to learn how to save some sharks, click the 'How You Can Help' button below."
    }else if(data.size === "large" && data.location === "polar" && data.status === "extinct"){
        var new_shark = sharkresult17;
        setShark(new_shark);
        var new_name = "Basking Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = extinctstatus;
        setHealth(new_health);
        var new_healthtext = "Extinct";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark is found from the surface down to at least 910 m (2,990 ft)." + "</br>" + "</br>" +
        "This shark moves slowly." + "</br>" + "</br>" +
        "This shark is the second-largest fish in the ocean after the whale shark."
    }else if(data.size === "large" && data.location === "tropical" && data.status === "endangered"){
        var new_shark = sharkresult18;
        setShark(new_shark);
        var new_name = "Whale Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endagered";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "The name of this shark refers to its size — this shark is as large as some species of whales." + "</br>" + "</br>" +
        "This shark is a filter feeder like baleen whales." + "</br>" + "</br>" +
        "This shark has a lifespan of 80 years, with some potentially living up to 130 years."
    }else if(data.size === "large" && data.location === "temperate" && data.status === "endangered"){
        var new_shark = sharkresult19;
        setShark(new_shark);
        var new_name = "Great White Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endagered";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark has no known predators, apart from orcas every now and then." + "</br>" + "</br>" +
        "This shark can live up to 70 years or more." + "</br>" + "</br>" +
        "This shark eats earless seals and sea otters."
    }else if(data.size === "large" && data.location === "polar" && data.status === "endangered"){
        var new_shark = sharkresult20;
        setShark(new_shark);
        var new_name = "Pacific Sleeper Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = endangeredstatus;
        setHealth(new_health);
        var new_healthtext = "Endagered";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark is a scavenger and predator." + "</br>" + "</br>" +
        "This shark can glide through water without moving its body much, and doesn't make much noise — this makes them great predators." + "</br>" + "</br>" +
        "This shark lives in Arctic temperature waters."
    }else if(data.size === "large" && data.location === "tropical" && data.status === "safe"){
        var new_shark = sharkresult21;
        setShark(new_shark);
        var new_name = "Tiger Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation1;
        setArea(new_area);
        var new_areatext = "Tropical";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark follows warm currents and stays closer to the equator during colder months of the year." + "</br>" + "</br>" +
        "This shark hunts at night time." + "</br>" + "</br>" +
        "This shark eats crabs, lobsters, shrimp, fish, seals, birds, squid, turtles, sea snakes, dolphins, and even other smaller sharks."
    }else if(data.size === "large" && data.location === "temperate" && data.status === "safe"){
        var new_shark = sharkresult22;
        setShark(new_shark);
        var new_name = "Bluntnose Sixgill Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation2;
        setArea(new_area);
        var new_areatext = "Temperate";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark is often called the Cow Shark." + "</br>" + "</br>" +
        "This shark is sluggish by nature, but it is capable of swimming fast for catching prey with its strong tail." + "</br>" + "</br>" +
        "This shark eats fish, sting rays, squid, crabs, shrimps, seals, and other sharks."
    }else if(data.size === "large" && data.location === "polar" && data.status === "safe"){
        var new_shark = sharkresult23;
        setShark(new_shark);
        var new_name = "Greenland Shark";
        setName(new_name);
        var new_sizetext = "Large";
        setSizeText(new_sizetext);
        var new_area = sharklocation3;
        setArea(new_area);
        var new_areatext = "Polar";
        setAreaText(new_areatext);
        var new_health = safestatus;
        setHealth(new_health);
        var new_healthtext = "Safe";
        setHealthText(new_healthtext);
        document.querySelector("#shark_fact").innerHTML = "This shark has the longest known lifespan of all vertebrae species — this shark can live between 300–500 years." + "</br>" + "</br>" +
        "This shark is also known as the Gurry Shark, Grey Shark, and is closely related to the Pacific and Southern Sleeper Sharks." + "</br>" + "</br>" +
        "This shark is the largest arctic fish."
    }
}

}

MeetPage.defaultProps = {
    backbtn:backBtn,
    sharksize:sharkSize,

    sharklocation1:sharkLocation1,
    sharklocation2:sharkLocation2,
    sharklocation3:sharkLocation3,
    
    safestatus:safeStatus,
    endangeredstatus:endangeredStatus,
    extinctstatus:extinctStatus,
    
    sharkresult0:sharkResult0,
    sharkresult1:sharkResult1,
    sharkresult2:sharkResult2,
    sharkresult3:sharkResult3,
    sharkresult4:sharkResult4,
    sharkresult5:sharkResult5,
    sharkresult6:sharkResult6,
    sharkresult7:sharkResult7,
    sharkresult8:sharkResult8,
    sharkresult9:sharkResult9,
    sharkresult10:sharkResult10,
    sharkresult11:sharkResult11,
    sharkresult12:sharkResult12,
    sharkresult13:sharkResult13,
    sharkresult14:sharkResult14,
    sharkresult15:sharkResult15,
    sharkresult16:sharkResult16,
    sharkresult17:sharkResult17,
    sharkresult18:sharkResult18,
    sharkresult19:sharkResult19,
    sharkresult20:sharkResult20,
    sharkresult21:sharkResult21,
    sharkresult22:sharkResult22,
    sharkresult23:sharkResult23,
}

export default MeetPage;