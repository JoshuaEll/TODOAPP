from rest_framework import permissions

class isOwner(permissions.BasePermission):
    def hasOwnership(self, request, view, object):

        # Checks to see if the 
        return True if request.method in permissions.SAFE_METHODS or object.author == request.user else False