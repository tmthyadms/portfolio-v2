<script setup lang="ts">
import { distance } from "fastest-levenshtein";

import navigation from "@/assets/data/navigation.json";

const openSearch = defineModel({ default: false });
const searchInput = defineModel("searchInput", { default: "" });
type Navigation = (typeof navigation)[number];
type SearchResult = Navigation & { distance: number };
const searchResults = ref<SearchResult[]>([]);
const isSearchResultsEmpty = computed(() => searchResults.value.length === 0);

onMounted(() => {
  addEventListener("keydown", (event) => {
    const isSearchViaShortcut = event.ctrlKey && event.code === "KeyK";
    const isSearchDismissed = event.code === "Escape";
    if (isSearchViaShortcut) {
      event.preventDefault();
      openSearch.value = true;
    } else if (isSearchDismissed) {
      openSearch.value = false;
    }
  });
});
function clearAndFocusSearchInput() {
  searchInput.value = "";
  const search = document.getElementById("search");
  search?.focus();
}
function dismissableMask() {
  const mask = document.querySelector('[data-pc-section="mask"]');
  // mask's event listener is automatically removed by MODERN browsers
  // when mask is removed from the DOM
  mask?.addEventListener("click", () => {
    openSearch.value = false;
  });
}
function populateSearchResult() {
  const initialNavigation = navigation.map((nav) => ({
    ...nav,
    ...{ distance: 0 },
  }));
  searchResults.value = initialNavigation;
}
function setupSearch() {
  clearAndFocusSearchInput();
  populateSearchResult();
  dismissableMask();
}
function clearSearchResults() {
  searchResults.value = [];
}
watch(searchInput, (newInput) => {
  clearSearchResults();
  const isInputValid = newInput.length > 0;
  const isInputEmpty = newInput.length === 0;
  if (isInputValid) {
    const MAX_DISTANCE = 5;
    navigation.forEach((nav) => {
      const dist = distance(nav.label, newInput);
      if (dist >= MAX_DISTANCE) return;
      searchResults.value.push({ ...nav, ...{ distance: dist } });
      searchResults.value.sort((a, b) => a.distance - b.distance);
    });
  } else if (isInputEmpty) {
    populateSearchResult();
  }
});
</script>

<template>
  <prime-dialog
    class="divide-y divide-surface-100 dark:divide-surface-50"
    :visible="openSearch"
    block-scroll
    modal
    @show="setupSearch"
  >
    <template #container>
      <div class="flex h-14 sm:h-12 items-center px-6">
        <icon
          class="text-muted"
          name="ph:magnifying-glass-duotone"
          size="1.25rem"
        />
        <input
          class="focus:outline-none sm:text-sm w-full px-2 bg-transparent"
          id="search"
          v-model="searchInput"
          type="text"
          placeholder="Search..."
        />
        <prime-button
          class="!shadow-none p-button-square justify-center"
          size="small"
          plain
          text
        >
          <icon name="ph:x-bold" />
        </prime-button>
      </div>
      <div
        class="p-2 overflow-y-auto app-scrollbar flex-grow"
        :class="{ 'flex flex-col justify-center': isSearchResultsEmpty }"
      >
        <div>
          <template v-for="result in searchResults">
            <div class="search-item">
              <icon :name="result.icon" size="1.25rem" />
              <span> {{ result.label }}</span>
              <span>{{ result.description }}</span>
            </div>
            <template v-for="child in result?.children">
              <div class="search-item">
                <icon :name="result.icon" size="1.25rem" />
                <span>{{ result.label }}</span>
                <icon name="ph:caret-right" size="0.75rem" />
                <span>{{ child.label }}</span>
                <span>{{ child.description }}</span>
              </div>
            </template>
          </template>
        </div>
        <template v-if="isSearchResultsEmpty">
          <div class="flex flex-col items-center">
            <icon
              class="mb-4 text-muted"
              name="ph:magnifying-glass-duotone"
              size="1.25rem"
            />
            <p class="text-sm">
              We couldn't find any items with that term. Please try again.
            </p>
          </div>
        </template>
      </div>
    </template>
  </prime-dialog>
</template>

<style scoped>
.search-item {
  @apply flex items-center gap-1.5 px-2.5 py-1.5;

  :not(:last-child) {
    @apply shrink-0;
  }

  span:last-child {
    @apply truncate text-muted;
  }
}
</style>
