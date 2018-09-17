import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MemeQuiz from './MemeQuiz';
import registerServiceWorker from './registerServiceWorker';
import {shuffle, sample} from 'underscore';

const memes = [
    {
        name: 'Oscar spelled with a K',
        imageUrl: 'images/livingmemes/Oscar.jpg',
        imageSorce: 'Faceknob',
        awnsers: [
            'Has sex with other creatures that sexually identifies themself as the same gender as them.',
            'Has been quoted saying -"I have sex with men."',
            'Would rather shake their hand with another man instead of slaming a door to their ballsack.'
            ]
    },
    {
        name: 'Joke',
        imageUrl: 'images/livingmemes/Jocke.jpg',
        imageSorce: 'Faceknob',
        awnsers: [
            'Claims to have had sex with women even tho its obious that they have not done so.',
            'Makes everyone they are around hate them instantly.',
            'Has a face only a mother could love.'
            ]
    },
    {
        name: 'Rikemans Barn',
        imageUrl: 'images/livingmemes/Philip.jpg',
        imageSorce: 'Faceknob',
        awnsers: [
            'Cant use hands to hold anything properly.',
            'Cockblocks themself whenever given a oppertunity.',
            'Has a MILF.'
            ]
    },
    {
        name: 'Sliskmejister',
        imageUrl: 'images/livingmemes/Börje.jpg',
        imageSorce: 'Faceknob',
        awnsers: [
            'Thinks lön is the only thing that matters in life.',
            'Buys expensive shit, but gets no gärris.',
            'Myttar to get their way.'
            ]
    },
    {
        name: 'Völvo',
        imageUrl: 'images/livingmemes/Marcus.jpg',
        imageSorce: 'Faceknob',
        awnsers: [
            'Thinks you can fuck spirits for a living.',
            'Listens to their drugs instead of their head.',
            'Belives the shittest shit some one can belive.'
            ]
    },
    {
        name: 'Mountainhills',
        imageUrl: 'images/livingmemes/Melker.jpg',
        imageSorce: 'Faceknob',
        awnsers: [
            'Is a world renowned parkour master.',
            'Eats more ass than a toilet seat',
            "Rocks the jeans jacket 'n jeans combo."
            ]
    },
    {
        name: 'Uweveveve Onyetnuweveve Obwemueveve Ossas',
        imageUrl: 'images/livingmemes/Mattias.jpg',
        imageSorce: 'Faceknob',
        awnsers: [
            'Plays magic everyday.',
            'Has sex exclusivly with feminists.',
            "Does not smoke."
            ]
    }
];

function getTurnData(memes){
    const allAwnsers = memes.reduce(function (p, c, i) {
        return p.concat(c.awnsers);
    }, []);
    const fourRandomAwnsers = shuffle(allAwnsers).slice(0,4);
    const correctAwnser = sample(fourRandomAwnsers);

    return {
        awnsers: fourRandomAwnsers,
        meme: memes.find((meme) =>
            meme.awnsers.some((awnser) =>
                awnser === correctAwnser ))
    }
}

const state = {
    turnData: getTurnData(memes)
}

const numbers = [1,2,3,4,5];
const doubled = numbers.map((number) => console.log(number * 2))
ReactDOM.render(<MemeQuiz {...state} />, document.getElementById('root'));
registerServiceWorker();
