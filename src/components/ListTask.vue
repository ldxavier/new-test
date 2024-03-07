<template>
  <section class="task">
    <div>
      <h2>Task List</h2>
        <input type="text"
          v-model="txtTask"
          placeholder="Enter task"
          @keyup.enter="AddTask"
        >
        <button @click="AddTask">Add Task</button><br/>
    </div>

    <div v-if="ListTask.length != 0">
      <h2>ALL ITEMS</h2>
      <span
        v-for="(list, index) in ListTask"
        :key="index"
        >
      <input
        v-if="list.length != 0"
        type="checkbox"
        v-model="CheckTask">
          {{ list }}  - <button @click="delTask(index)">
          X
         </button> <br/>
      </span>
    </div>

  </section>
</template>

<script setup>
import { ref } from "vue";

const txtTask = ref("");
const ListTask = ref([]);

const AddTask = () => {
  // if (txtTask.value.trim() === "") {
  //   alert("Please enter a task.");
  //   txtTask.value = "";
  //   return;
  // }
  // ListTask.value.forEach((item) => {
  //   if (item === txtTask.value) {
  //     alert("Task already exists");
  //     txtTask.value = "";
  //   }
  // });
  ListTask.value.push(txtTask.value);
  txtTask.value = "";
};

const delTask = (index) => {
  ListTask.value.splice(index, 1);
};

</script>

<style scoped>
  .task {
    margin-top: 100px
  }
</style>
