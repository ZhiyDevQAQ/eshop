<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <br>
    <br>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "./ListContainer/ListContainer.vue";
import TodayRecommend from "./TodayRecommend/TodayRecommend.vue";
import Rank from "./Rank/Rank.vue";
import Like from "./Like/Like.vue";
import Floor from "./Floor/Floor.vue";
import Brand from "./Brand/Brand.vue";

export default {
  name: "HomeComponent",
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  data() {
    return {};
  },

  mounted() {
    this.$store.dispatch("TypeNavOptions/getTypeNav")
  },

  methods: {},
};
</script>

<style lang="less" scoped></style>
