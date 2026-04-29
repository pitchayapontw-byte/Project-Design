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
              <div class="text-h4 q-ml-md text-white">Book Store</div>

              <div class="q-pa-md">
                <q-btn-dropdown color="primary" label="Dropdown Button">
                  <q-list>
                    <q-item clickable v-close-popup @click="onItemClick">
                      <q-item-section>
                        <q-item-label>Add Book</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-btn-dropdown>
              </div>
            </div>
          </th>
        </tr>
        <tr>
          <th class="text-left">Dessert (100g serving)</th>
          <th class="text-right">Calories</th>
          <th class="text-right">Fat (g)</th>
          <th class="text-right">Carbs (g)</th>
          <th class="text-right">Protein (g)</th>
        </tr>
      </thead>
      <tbody :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
        <tr>
          <td class="text-left">Frozen Yogurt</td>
          <td class="text-right">159</td>
          <td class="text-right">6</td>
          <td class="text-right">24</td>
          <td class="text-right">4</td>
        </tr>
        <tr>
          <td class="text-left">Ice cream sandwich</td>
          <td class="text-right">237</td>
          <td class="text-right">9</td>
          <td class="text-right">37</td>
          <td class="text-right">4.3</td>
        </tr>
        <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">6</td>
        </tr>
        <tr>
          <td class="text-left">Cupcake</td>
          <td class="text-right">305</td>
          <td class="text-right">3.7</td>
          <td class="text-right">67</td>
          <td class="text-right">4.3</td>
        </tr>
        <tr>
          <td class="text-left">Gingerbread</td>
          <td class="text-right">356</td>
          <td class="text-right">16</td>
          <td class="text-right">49</td>
          <td class="text-right">3.9</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>

<script setup>
const lorem = 'ทดสอบการแสดงผลค้าบ'
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
