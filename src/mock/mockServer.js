import Mock from 'mockjs'
import banners from './banners.json'
import floors from './floors.json'

Mock.mock("/Mock/Banners", {
  code: 200,
  data: banners,
});

Mock.mock("/Mock/Floors", {
  code: 200,
  data: floors,
});
