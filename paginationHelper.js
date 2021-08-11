function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

PaginationHelper.prototype.pageCount = function () {
  const itemCount = this.itemCount();
  const pageCount = Math.floor(itemCount / this.itemsPerPage);
  return itemCount % this.itemsPerPage == 0 ? pageCount : pageCount + 1;
};

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  const pageCount = this.pageCount();
  if (pageIndex >= pageCount || pageIndex < 0) return -1;
  return pageIndex < pageCount - 1
    ? this.itemsPerPage
    : this.itemCount() % this.itemsPerPage;
};

PaginationHelper.prototype.pageIndex = function (itemIndex) {
  if (itemIndex < 0 || itemIndex >= this.itemCount()) return -1;
  return Math.floor(itemIndex / this.itemsPerPage);
};
