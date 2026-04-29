<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>
  </div>
  <div class="q-pa-md">
    <q-markup-table flat bordered>
      <thead class="bg-teal">
        <tr>
          <th colspan="5">
            <div class="row no-wrap items-center">
              <div class="text-h4 text-white">รวมหนังสือที่สะสม</div>

              <div class="q-pa-md q-gutter-sm">
                <q-btn color="aqua" icon-right="add2" label="Add Book" />
              </div>
            </div>
          </th>
        </tr>
        <!-- หัวตาราง -->
        <tr class="dataheader">
          <th class="dataheader" style="font-size: large">ขื่อเรื่อง</th>
          <th class="dataheader" style="font-size: large">ผู้แต่ง</th>
          <th class="dataheader" style="font-size: large">ประเภท</th>
          <th class="dataheader" style="font-size: large">ราคา</th>
          <th class="dataheader">คะแนน</th>
        </tr>
      </thead>
      <!-- ข้อมูลตาราง -->
      <tbody :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
        <tr>
          <td class="data">ภาพวาดปริศนา</td>
          <td class="data">นักเขียนคนหนึ่ง</td>
          <td class="data">นวนิยาย</td>
          <td class="data">350</td>
          <td class="data">5</td>
        </tr>
        <tr>
          <td class="data">หงส์ในโคม</td>
          <td class="data">นักเขียนคนหนึ่ง</td>
          <td class="data">นวนิยาย</td>
          <td class="data">370</td>
          <td class="data">5</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script setup>
const lorem = 'จำนวนหนังสือที่สะสม: 2 เล่ม'
</script>

<style lang="sass" scoped>
// การ์ด
.my-card
  width: 100%
  max-width: 250px

// หัวตาราง
.dataheader
  text-align: center;
  color: white;
  font-weight: semi-bold;
  font-size: large;

// ข้อมูลตาราง
.data
  font-size: medium;
  font-color: blue;
</style>
