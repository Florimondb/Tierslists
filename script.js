 document.getElementById('searchWebtoons').addEventListener('input', function() {
            let searchValue = this.value.toLowerCase();
            document.querySelectorAll('.card').forEach(card => {
                let name = card.getAttribute('data-name').toLowerCase();
                card.style.display = name.includes(searchValue) ? 'block' : 'none';
            });
        });
        document.getElementById('status').addEventListener('change', function() {
            let selectedStatus = this.value;
            document.querySelectorAll('.card').forEach(card => {
                let cardStatus = card.getAttribute('data-status');
                card.style.display = selectedStatus === "" || cardStatus === selectedStatus ? 'block' : 'none';
            });
        });
