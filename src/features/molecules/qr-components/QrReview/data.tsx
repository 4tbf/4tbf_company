import { StaticImageData } from 'next/image';
import icon1 from 'public/images/qr/thoughts/icon_1.png';
import icon2 from 'public/images/qr/thoughts/icon_2.png';
import icon3 from 'public/images/qr/thoughts/icon_3.png';
import icon4 from 'public/images/qr/thoughts/icon_4.png';
import emoji1 from 'public/images/qr/thoughts/emoji_1.png';
import emoji2 from 'public/images/qr/thoughts/emoji_2.png';
import emoji3 from 'public/images/qr/thoughts/emoji_3.png';
import emoji4 from 'public/images/qr/thoughts/emoji_4.png';
import comment1 from 'public/images/qr/thoughts/comment_1.png';
import comment2 from 'public/images/qr/thoughts/comment_2.png';
import comment3 from 'public/images/qr/thoughts/comment_3.png';
import comment4 from 'public/images/qr/thoughts/comment_4.png';
import commentTablet1 from 'public/images/qr/thoughts/commentTablet_1.png';
import commentTablet2 from 'public/images/qr/thoughts/commentTablet_2.png';
import commentTablet3 from 'public/images/qr/thoughts/commentTablet_3.png';
import commentTablet4 from 'public/images/qr/thoughts/commentTablet_4.png';
import commentMobile1 from 'public/images/qr/thoughts/commentMobile_1.png';
import commentMobile2 from 'public/images/qr/thoughts/commentMobile_2.png';
import commentMobile3 from 'public/images/qr/thoughts/commentMobile_3.png';
import commentMobile4 from 'public/images/qr/thoughts/commentMobile_4.png';

interface IThoughts {
  icon: StaticImageData;
  emoji: StaticImageData;
  comment: StaticImageData;
  commentMobile: StaticImageData;
  commentTablet: StaticImageData;
  top: string;
  topTablet?: string;
  topMobile?: string;
  left?: string;
  leftTablet?: string;
  leftMobile?: string;
  right?: string;
  rightTablet?: string;
  rightMobile?: string;
  emojiTop?: string;
  emojiTopTablet?: string;
  emojiTopMobile?: string;
  emojiLeft?: string;
  emojiLeftTablet?: string;
  emojiLeftMobile?: string;
  emojiRight?: string;
  emojiRightTablet?: string;
  emojiRightMobile?: string;
  commentTop?: string;
  commentTopTablet?: string;
  commentTopMobile?: string;
  commentLeft?: string;
  commentLeftTablet?: string;
  commentLeftMobile?: string;
  commentRight?: string;
  commentRightTablet?: string;
  commentRightMobile?: string;
}

export const THOUGHTS: IThoughts[] = [
  {
    icon: icon1,
    emoji: emoji1,
    comment: comment1,
    commentTablet: commentTablet1,
    commentMobile: commentMobile1,
    top: '249px',
    left: '13px',
    topTablet: '161px',
    topMobile: '125px',
    leftMobile: '11px',
    emojiTop: '262px',
    emojiTopTablet: '174px',
    emojiTopMobile: '135px',
    commentTop: '104px',
    commentLeft: '36px',
    commentTopTablet: '47px',
    commentLeftTablet: ' -10px',
    commentTopMobile: '16px',
    commentLeftMobile: '-16px',
  },
  {
    icon: icon2,
    emoji: emoji2,
    comment: comment2,
    commentTablet: commentTablet2,
    commentMobile: commentMobile2,
    top: '206px',
    right: '110px',
    topTablet: '139px',
    rightTablet: '-222px',
    topMobile: '208px',
    rightMobile: '-15px',
    emojiTop: '222px',
    emojiRight: '223px',
    emojiTopTablet: '155px',
    emojiRightTablet: '-130px',
    emojiTopMobile: '224px',
    emojiRightMobile: '58px',
    commentTop: '43px',
    commentRight: '118px',
    commentTopTablet: '24px',
    commentRightTablet: ' -222px',
    commentTopMobile: '110px',
    commentRightMobile: ' -31px',
  },
  {
    icon: icon3,
    emoji: emoji3,
    comment: comment3,
    commentTablet: commentTablet3,
    commentMobile: commentMobile3,
    top: '424px',
    left: '406px',
    topTablet: '302px',
    leftTablet: '204px',
    topMobile: '370px',
    leftMobile: '2px',
    emojiTop: '427px',
    emojiLeft: '404px',
    emojiTopMobile: '373px',
    emojiLeftMobile: '0',
    commentTop: '274px',
    commentLeft: '309px',
    commentTopTablet: '170px',
    commentLeftTablet: '198px',
    emojiTopTablet: '305px',
    emojiLeftTablet: '202px',
    commentTopMobile: '260px',
    commentLeftMobile: '-10px',
  },
  {
    icon: icon4,
    emoji: emoji4,
    comment: comment4,
    commentTablet: commentTablet4,
    commentMobile: commentMobile4,
    top: '405px',
    right: '0',
    topTablet: '239px',
    rightTablet: '-191px',
    topMobile: '282px',
    rightMobile: '-15px',
    emojiTop: '425px',
    emojiRight: '112px',
    emojiTopTablet: '259px',
    emojiRightTablet: '-100px',
    emojiTopMobile: '293px',
    emojiRightMobile: '51px',
    commentTop: '243px',
    commentRight: '15px',
    commentTopTablet: '121px',
    commentRightTablet: '-187px',
    commentTopMobile: '173px',
    commentRightMobile: '-31px',
  },
];
