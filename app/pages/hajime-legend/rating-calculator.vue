<script setup lang="ts">
import { NumberField, NumberFieldContent, NumberFieldInput } from '@/components/ui/number-field'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

definePageMeta({
  layout: 'hajime-legend',
})

const vo = ref(0)
const da = ref(0)
const vi = ref(0)
const midtermScore = ref(0)
const ratingScores = computed(() => {
  if (vo.value > 0 && da.value > 0 && vi.value > 0 && midtermScore.value > 0) {
    return calculateCurrentRating(vo.value, da.value, vi.value, midtermScore.value)
  }

  return {}
})
</script>

<template>
  <div class="flex justify-center p-2">
    <div class="w-1/3 text-center">
      <div class="text-semibold text-2xl">Rating Calculator</div>
      <div class="flex">
        <div class="flex w-1/3 flex-col py-2 pe-1">
          <NumberField v-model="vo">
            <NumberFieldContent>
              <NumberFieldInput />
            </NumberFieldContent>
          </NumberField>
        </div>
        <div class="flex w-1/3 flex-col px-1 py-2">
          <NumberField v-model="da">
            <NumberFieldContent>
              <NumberFieldInput />
            </NumberFieldContent>
          </NumberField>
        </div>
        <div class="flex w-1/3 flex-col py-2 ps-1">
          <NumberField v-model="vi">
            <NumberFieldContent>
              <NumberFieldInput />
            </NumberFieldContent>
          </NumberField>
        </div>
      </div>
      <div class="flex py-2">
        <NumberField v-model="midtermScore" class="w-full">
          <NumberFieldContent>
            <NumberFieldInput />
          </NumberFieldContent>
        </NumberField>
      </div>
      <div class="flex py-2">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rating</TableHead>
              <TableHead>Required Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>S4</TableCell>
              <TableCell>{{ ratingScores['S4'] }}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>SSS+</TableCell>
              <TableCell>{{ ratingScores['SSS+'] }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  </div>
</template>
