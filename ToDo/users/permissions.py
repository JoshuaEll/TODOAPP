from rest_framework import permissions

class isOwner(permissions.BasePermission):
    def hasOwnership(self, request, view, object):

        return True if request.user == object.author else False