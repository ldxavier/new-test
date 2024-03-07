<template>
  <section class="section">
      <h2>Enter Tasks</h2>
        <input type="text"
          v-model="txtTask"
          placeholder="Enter task"
          @keyup.enter="AddTask"
        >
        <button @click="AddTask">Add Task</button><br/>

      <div class="task">
        <div class="taskItems" v-if="ListTask.length != 0">
          <h2>Tasks</h2>
          <div
            v-for="(list, index) in ListTask"
            :key="index"
          >
            <input
              v-if="list.length != 0"
              type="checkbox"
              v-model="checked[index]">
                {{ list }}  - <button @click="delTask(index)">
                X
              </button> <br/>
          </div>
        </div>
          <div class="CompletedList" v-if="completedTask.length != 0">
            <h2>Completed Tasks</h2>
            <div
              v-for="checkTrue in completedTask"
              :key="checkTrue"
            >
              <li>{{ checkTrue }}</li>
            </div>
          </div>
          <div class="unCompletedList" v-if="unCompletededTask.length != 0">
            <h2>UnCompleted Tasks</h2>
            <div
              v-for="checkFalse in unCompletededTask"
              :key="checkFalse"
            >
              <li>{{ checkFalse }}</li>
            </div>
          </div>
      </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

//var declaration
const txtTask = ref("");
const ListTask = ref([]);
const checked = ref([]);


//methods
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
  checked.value.splice(index, 1);
};


//computed
const completedTask = computed(() => {
  return ListTask.value.filter((list, index) => {
    return checked.value[index];
  });
});

const unCompletededTask = computed(() => {
  return ListTask.value.filter((list,index) => {
    return !checked.value[index];
  } )
});

</script>

<style scoped>
.section {
    margin-top: 100px;
  }

  .task {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
  }
  .taskItems {
    padding: 3px;
    margin-top: 10px;
    background-color: rgb(189, 189, 189);
    border: 1px solid rgb(60, 61, 60);
    border-radius: 20px;
    width: 30%;
    height: auto;
    color: black;
  }

  .CompletedList {
    padding: 3px;
    margin-top: 10px;
    background-color: lightgreen;
    border: 1px solid green;
    border-radius: 20px;
    width: 30%;
    height: auto;
    color: black;
  }
  .unCompletedList {
    padding: 3px;
    margin-top: 10px;
    background-color: rgb(248, 127, 127);
    border: 1px solid rgb(192, 24, 24);
    border-radius: 20px;
    width: 30%;
    height: auto;
    color: black;
  }
</style>
