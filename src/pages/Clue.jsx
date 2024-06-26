import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { clueType } from '../store/atoms/clues';
import { useNavigate } from 'react-router-dom';

export const Clue = () => {
  const result = useRecoilValue(clueType);
  const navigate = useNavigate();
  const resultNum = Number(result);

  const clues = {
    65108: {
      id: 1,
      location: "giftBox",
      isLast: false,
      clue: "A smart companion, white and bright, \n Guarding your world both day and night. \n Monthly payments still to make, \n In its armor, a clue to take"
    },
    94237: {
      id: 2,
      location: "phone",
      isLast: false,
      clue: "A lost wager led to a gift of sound, \n Daily it travels, to and from town. \n Though meant for me, it holds a surprise, \n Look inid where music amplifies."
    },
    28745: {
      id: 3,
      location: "headphones",
      isLast: false,
      clue: "Where your chocolates chill for office days,  \n search where coldness keeps the next clue in its embrace."
    },
    57861: {
      id: 4,
      location: "chocolate",
      isLast: false,
      clue: "A forest of gifts, one stands apart, \n Its glow awakens with a gentle start. \n No switch to flip, just fingers light, \n Seek your next clue in this touch-born bright."
    },
    32094: {
      id: 5,
      location: "light",
      isLast: false,
      clue: "Thirsty friends wait on the outdoor shelf, \n Leaves droop, asking for your help.\n In the dry dirt of one sad pot,\n A clue is idng in this forgotten spot"
    },
    79485: {
      id: 6,
      location: "plants",
      isLast: false,
      clue: "Where white grains wait to become your favorite dish,  \n iden among them is your next wish.  \n Look where pulagam begins,  \n and find the clue within."
    },
    15673: {
      id: 7,
      location: "rice",
      isLast: false,
      clue: "Four steps down, the metal steed sleeps, \n Ruby-coated, waiting for peeps. \n Above the realm where magic bobs, \n A flap guards more than sunny jobs. \n Not where spells are cast with glee, \n But higher up, what can't you see?"
    },
    48291: {
      id: 8,
      location: "car",
      isLast: true,
      clue: "Soft and cozy, where we rest, \n A coral treasure joins our nest. \n Not in the seat that leans back far, \n But its friend holds what you are. \n Between the layers of comfort found, \n Your long-awaited prize is bound"
    }
  };
  useEffect(() => {
    if (!clues[resultNum]) {
      navigate('/');
    }
  }, [resultNum, navigate]);

  const renderClue = () => {
    const clue = clues[resultNum];
    if (!clue) return null;

    if (clue.isLast) {
      return (
        <div className="text-center">
          <h1 className="text-white text-4xl pb-16">Wish you a Happy Birthday!!</h1>
          <h2 className="text-white text-2xl mt-4">The Last Clue</h2>
          <p className="text-gray-400 text-lg mt-2">You are 🤏 close to completion</p>
          <p className="text-white mt-8 whitespace-pre-line leading-7">
          {clues[resultNum].clue}
          </p>
        </div>
      );
    }

    return (
      <div className="text-center">
        <h1 className="text-white text-2xl">Clue #{clue.id}</h1>
        <p className="text-white mt-8 whitespace-pre-line leading-7">{clue.clue}</p>
      </div>
    );
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <div className='flex flex-col items-center justify-around min-h-screen bg-[#070711]'>
      <div className='text-white text-center w-[80%]'>{renderClue()}</div>
      {!clues[resultNum]?.isLast && (
        <div onClick={handleNavigate} className='inline-flex w-[174px] justify-center items-center gap-2.5 bg-[#D9D9D9] px-9 py-[9px] rounded-[10px] cursor-pointer truncate'>
          Scan Next Clue
        </div>
      )}
    </div>
  );
};