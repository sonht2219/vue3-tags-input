<template>
  <vue-tags-input
      ref="vueTagsInput" v-model="newTag" :tags="tags" :autocomplete-items="autocompleteItems" :placeholder="inputPlaceholder"
      :allow-edit-tags="true" :is-draggable="true" :draggable-handle="true" :autocomplete-min-length="autocompleteMinLength"
      @click="autocompleteMinLength = 0" @tags-changed="setNewTags" @tag-order-changed="newTagsOrder => tags = newTagsOrder"
    >
  </vue-tags-input>
</template>

<script>
import { VueTagsInput } from '../dist/vue-tags-input'

export default {
  name: 'App',
  components: { VueTagsInput },
  data() {
    return {
      newTag: '',
      tags: [],
      autocompleteItems: [
        { text: 'Dog', tag: 'dog' },
        { text: 'Cat', tag: 'cat' },
        { text: 'Lizard', tag: 'lizard' },
      ],
      tagInputFocus: false,
      inputPlaceholder: 'Start typing ...',
      autocompleteMinLength: 0
    };
  },
  methods: {
    setNewTags (newTags) {
      this.tags = newTags
      this.autocompleteMinLength = 1
    }
  }
}
</script>

<style>

</style>